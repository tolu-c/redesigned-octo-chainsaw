import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-[50vh]">
      <div className="flex flex-col items-center w-full md:w-3/4 gap-8 relative isolate px-6 py-14 lg:px-8">
        <h1 className="text-5xl md:text-7xl text-slate-950 font-bold text-center">
          Welcome to SecureFileVault
        </h1>
        <p className="text-center text-lg md:text-xl text-slate-700">
          SecureFileVault is a trusted platform that allows you to privately
          store your important files with ease. We understand the need for
          secure and reliable file storage solutions, which is why we provide a
          user-friendly interface combined with robust security measures.
        </p>
        <div className="flex items-center gap-8 md:gap-12">
          <Link
            to="/login"
            className="p-3 px-6 w-max text-white bg-slate-900 hover:bg-slate-950 rounded font-bold"
          >
            <span>Get Started</span>
          </Link>
          <Link
            to="about"
            className="flex items-center gap-1 text-slate-900 hover:text-slate-950 font-medium hover:font-bold"
          >
            <span>Learn More</span>
            <ArrowSmallRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
