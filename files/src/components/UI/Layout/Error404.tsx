import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="flex flex-col gap-3 p-4 justify-center items-center w-full h-full">
      <h5 className="text-base md:text-lg font-semibold text-slate-900">404</h5>
      <h2 className="text-slate-950 font-bold text-3xl md:text-5xl">
        Page not found
      </h2>
      <p className="text-sm md:text-base font-normal text-slate-600 text-center">
        Sorry, we couldn't find the page you were looking for.
      </p>
      <Link
        to="/"
        className="text-base font-medium text-slate-800 hover:text-slate-950 hover:font-bold"
      >
        Go back home
      </Link>
    </div>
  );
};
