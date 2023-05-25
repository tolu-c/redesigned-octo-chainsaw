import { Link, NavLink } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

export const NavBar = () => {
  return (
    <nav className="flex justify-between gap-12 items-center p-6">
      <h3 className="text-3xl md:text-4xl text-slate-950 font-bold">
        SecureFile
      </h3>
      <nav className="grow justify-center flex">
        <ul className="flex items-center gap-8">
          <NavLink
            to=""
            className={({ isActive }) =>
              `${
                isActive
                  ? " text-slate-900 font-semibold text-lg"
                  : " text-base text-slate-700 font-normal hover:font-medium"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${
                isActive
                  ? " text-slate-900 font-semibold text-lg"
                  : " text-base text-slate-700 font-normal hover:font-medium"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${
                isActive
                  ? " text-slate-900 font-semibold text-lg"
                  : " text-base text-slate-700 font-normal hover:font-medium"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>
      </nav>
      <div>
        <Link
          to="/login"
          className="flex items-center gap-1 text-slate-800 font-medium hover:font-bold"
        >
          <span>Login</span>
          <ArrowSmallRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </nav>
  );
};
