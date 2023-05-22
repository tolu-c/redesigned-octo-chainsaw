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
