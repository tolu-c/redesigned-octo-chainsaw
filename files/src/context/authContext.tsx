import { createContext, ReactNode, useState } from "react";
import { AuthContextType, LoginData } from "../types";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  user: null,
  authToken: null,
});
const API = process.env.REACT_APP_API;

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState<string | null>(null);

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
      setUserLoggedIn(true);
      navigate("files");
    } else {
      throw Error("Something went wrong");
    }
  };

  const logoutHandler = () => {
    setUserLoggedIn(false);
  };

  const authContextValue: AuthContextType = {
    isLoggedIn: userLoggedIn,
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
