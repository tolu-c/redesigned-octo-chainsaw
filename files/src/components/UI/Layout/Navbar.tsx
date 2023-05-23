import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavItemProps } from "../../../types";
import {
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../../../context/authContext";

export const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className="hidden md:flex md:col-span-2 lg:col-span-1 bg-gray-900 h-full flex-col py-4 px-2 gap-12">
      <h2 className="text-gray-100 text-xl font-bold">Leke Files</h2>
      <ul className="w-full flex flex-col gap-4">
        <NavItem
          title="Home"
          href="/"
          icon={<FolderIcon className="w-6 h-6" />}
        />
        <NavItem
          title="Files"
          href="files"
          icon={<FolderOpenIcon className="w-6 h-6" />}
        />
        <NavItem
          title="Upload"
          href="upload"
          icon={<FolderPlusIcon className="w-6 h-6" />}
        />
      </ul>
      <div className="order-last">
        {isLoggedIn ? (
          <span onClick={logout}>
            <NavItem
              title="Logout"
              href="/"
              icon={<ArrowRightOnRectangleIcon className="w-6 h-6" />}
            />
          </span>
        ) : (
          <NavItem
            title="Login"
            href="login"
            icon={<ArrowRightOnRectangleIcon className="w-6 h-6" />}
          />
        )}
      </div>
    </div>
  );
};

export const NavItem: FC<NavItemProps> = ({ title, href, icon }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${
          isActive ? "text-slate-100 bg-gray-800 shadow-md" : "text-slate-400"
        } w-full p-3 flex gap-3 items-center rounded-lg hover:bg-gray-800 hover:shadow font-medium hover:text-slate-100`
      }
    >
      <span>{icon}</span>
      <span>{title}</span>
    </NavLink>
  );
};
