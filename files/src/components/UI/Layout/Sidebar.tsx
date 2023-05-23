import { FC } from "react";
import { SideBarProps } from "../../../types";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Navbar";

export const Sidebar: FC<SideBarProps> = ({ onClose }) => {
  const content = (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-600 flex">
      <span
        className="cursor-pointer order-last w-max p-3 text-gray-300 bg-gray-700/70 rounded-full h-max absolute top-3 right-3"
        onClick={onClose}
      >
        <XMarkIcon className="w-6 h-6" />
      </span>
      <div className="w-3/4 bg-gray-900 h-full flex flex-col p-4 gap-12">
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
          <NavItem
            title="Logout"
            href="logout"
            icon={<ArrowRightOnRectangleIcon className="w-6 h-6" />}
          />
          {/* <NavItem
              title="Login"
              href="login"
              icon={<ArrowRightOnRectangleIcon className="w-6 h-6" />}
            /> */}
        </div>
      </div>
    </div>
  );

  return createPortal(
    content,
    document.getElementById("sidebar") as HTMLElement
  );
};
