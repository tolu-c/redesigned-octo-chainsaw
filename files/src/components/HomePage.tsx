import { Link } from "react-router-dom";
import leke from "../images/leke.jpg";

export const HomePage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-5/6 md:w-3/4 flex flex-col gap-8 items-center p-4">
        <div className="w-52 h-52 md:w-64 md:h-64 overflow-hidden rounded-full border shadow">
          <img
            src={leke}
            alt="leke"
            className="w-full h-full object-contain object-center"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900">
          Welcome to Leke Files
        </h1>
        <div className="flex flex-col gap-1 text-center">
          <p className="text-base md:text-lg text-slate-700">
            Name:{" "}
            <span className="font-semibold">ADEJUYIGBE ADELEKE JOSEPH</span>
          </p>
          <p className="text-base md:text-lg text-slate-700">
            Student ID number: <span className="font-semibold">bi27tn</span>
          </p>
          <p className="text-base md:text-lg text-slate-700">
            Student Number: <span className="font-semibold">229146776</span>
          </p>
        </div>
        <Link
          to="files"
          className="text-lg text-center font-bold text-slate-800 bg-transparent border border-slate-800 hover:bg-slate-950 hover:text-slate-100 p-4 px-6 rounded-lg w-max"
        >
          Go to your files
        </Link>
      </div>
    </div>
  );
};
