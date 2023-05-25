import { FC } from "react";
import { LayoutProps } from "../../../types";
import { NavBar } from "./HomeNav";

export const HomeLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <NavBar />
      {children}
      <footer className="w-full text-center">All Rights Reserved</footer>
    </div>
  );
};
