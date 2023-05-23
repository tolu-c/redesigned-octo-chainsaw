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

export interface UserProps {
  username: string;
  email: string;
}
export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  user: UserProps | null;
}

export interface ProtectedRoutesProps {
  children: ReactNode;
}
