import { FC, useState, useContext } from "react";
import { LayoutProps } from "../../../types";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { AuthContext } from "../../../context/authContext";

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [openSidebar, setSidebar] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-8 lg:grid-cols-6 h-screen relative">
      <Navbar />
      <div className="col-auto md:col-span-6 lg:col-span-5 flex flex-col h-full">
        <div className="w-full h-16 border-b border-slate-200 flex justify-between items-center p-3">
          <span
            className="md:hidden text-slate-800 cursor-pointer"
            onClick={() => {
              setSidebar(true);
            }}
          >
            <Bars3Icon className="w-6 h-6" />
          </span>
          <h2>Your Files</h2>
          <p className="text-sm font-medium text-slate-600">
            Hello,{" "}
            <span className="text-slate-800 capitalize">
              {user ? user.username : "Anonymous"}
            </span>
          </p>
        </div>
        <div className="w-full p-3 h-full">{children}</div>

        {openSidebar && (
          <Sidebar
            onClose={() => {
              setSidebar(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
