import { Fragment, FC } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { LayoutProps } from "../../../types";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};
