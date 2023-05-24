import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  AuthContextType,
  AuthTokenProps,
  LoginData,
  UserToken,
} from "../types";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  user: null,
  authToken: null,
});

const API = process.env.REACT_APP_API;

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const authTokensString = localStorage.getItem("authTokens");

  const navigate = useNavigate();

  const [user, setUser] = useState<UserToken | null>(() =>
    authTokensString ? jwt_decode(authTokensString) : null
  );
  const [authTokens, setAuthTokens] = useState<AuthTokenProps | null>(() =>
    authTokensString ? JSON.parse(authTokensString) : null
  );
  const [loading, setLoading] = useState<boolean>(true);

  const loginHandler = async (data: LoginData) => {
    const response = await fetch(`${API}/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.status === 200) {
      setAuthTokens(responseData);
      setUser(jwt_decode(responseData.access));
      localStorage.setItem("authTokens", JSON.stringify(responseData));
      navigate("files");
    } else {
      throw Error("Something went wrong");
    }
  };

  const logoutHandler = useCallback(async () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("login");
    // eslint-disable-next-line
  }, []);

  const updateTokenHandler = useCallback(async () => {
    const response = await fetch(`${API}/token/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    const responseData = await response.json();
    if (response.status === 200) {
      setAuthTokens(responseData);
      setUser(jwt_decode(responseData.access));
      localStorage.setItem("authTokens", JSON.stringify(responseData));
    } else {
      logoutHandler();
    }
    if (loading) {
      setLoading(false);
    }
  }, [authTokens?.refresh, logoutHandler, loading]);

  useEffect(() => {
    if (loading) {
      updateTokenHandler();
    }
    const twentyThreeHours = 1000 * 60 * 60 * 23;
    const intervalID = setInterval(() => {
      if (authTokens) {
        updateTokenHandler();
      }
    }, twentyThreeHours);

    return () => clearInterval(intervalID);
  }, [authTokens, loading, updateTokenHandler]);

  const authContextValue: AuthContextType = {
    login: loginHandler,
    logout: logoutHandler,
    user: user,
    authToken: authTokens,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
