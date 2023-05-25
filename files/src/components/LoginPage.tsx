import { FormEvent, useRef, useContext } from "react";
import { Button } from "./UI/Form/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const LoginPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login, error } = useContext(AuthContext);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
    };
    login(formData);
  };

  return (
    <div className="flex gap-4 w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-8 w-full items-center">
        <h2 className="text-slate-950 text-lg md:text-xl font-semibold w-max">
          Sign in to your account
        </h2>
        <form
          onSubmit={handleLogin}
          className="w-5/6 md:w-3/4 flex flex-col gap-4"
        >
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-slate-800 cursor-pointer"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              ref={usernameRef}
              required
              className="rounded-md shadow focus:shadow-md focus:outline-none focus:border focus:border-slate-950 focus:ring-1 focus:ring-slate-950"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-800 cursor-pointer"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              required
              className="rounded-md shadow focus:shadow-md focus:outline-none focus:border focus:border-slate-950 focus:ring-1 focus:ring-slate-950"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Button type="submit" title="Sign in" />
          </div>
          {error && <p className="text-sm text-red-900 font-medium">{error}</p>}
        </form>
        <div className="">
          <p className="text-sm font-normal text-slate-700">
            Not a member?{" "}
            <Link
              to="/register"
              className="text-slate-950 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
