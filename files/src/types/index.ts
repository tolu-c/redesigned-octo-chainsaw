import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NavItemProps {
  title: string;
  href: string;
  icon?: ReactNode;
}

export interface SideBarProps {
  onClose: () => void;
}

export interface FileItemProps {
  name: string;
  url: string;
  type: string;
}

export interface ButtonProps {
  type: "button" | "submit";
  title: string;
  onClick?: () => void;
}

export interface UserToken {
  token_type: string;
  exp: string;
  iat: string;
  user_id: string;
  username: string;
  email: string;
}

export interface LoginData {
  username: string;
  password: string;
}
export interface RegisterData {
  username: string;
  email: string;
  password: string;
}
export interface AuthContextType {
  isLoggedIn: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
  user: UserToken | null;
  authToken: string | null;
}

export interface ProtectedRoutesProps {
  children: ReactNode;
}
