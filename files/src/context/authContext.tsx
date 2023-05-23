import { createContext, ReactNode, useState } from "react";
import { AuthContextType } from "../types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  user: null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  const loginHandler = () => {
    setUserLoggedIn(true);
    navigate("files");
  };

  const logoutHandler = () => {
    setUserLoggedIn(false);
  };

  const authContextValue: AuthContextType = {
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    user: null,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
