import { FC } from "react";
import { LayoutProps } from "../../../types";

export const HomeLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav>nav item</nav>
      {children}
      <footer></footer>
    </div>
  );
};
