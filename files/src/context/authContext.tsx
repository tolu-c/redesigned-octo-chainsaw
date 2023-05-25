import { createContext, ReactNode, useEffect, useState } from "react";
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
  error: null,
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      setErrorMessage(responseData.detail);
    }
  };

  const logoutHandler = async () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("home");
    // eslint-disable-next-line
  };

  const updateTokenHandler = async () => {
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
  };

  useEffect(() => {
    const twentyThreeHours = 1000 * 60 * 60 * 23;
    const intervalID = setInterval(() => {
      if (authTokens) {
        updateTokenHandler();
      }
    }, twentyThreeHours);

    return () => clearInterval(intervalID);
    // eslint-disable-next-line
  }, [authTokens]);

  const authContextValue: AuthContextType = {
    login: loginHandler,
    logout: logoutHandler,
    user: user,
    authToken: authTokens,
    error: errorMessage,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
