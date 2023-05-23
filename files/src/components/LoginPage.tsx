import { FormEvent, useRef, useContext } from "react";
import { Button } from "./UI/Form/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const LoginPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useContext(AuthContext);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };
    console.log(formData);
    login();
  };

  return (
    <div className="flex gap-4 justify-center">
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
              className="rounded-md shadow focus:shadow-md focus:outline-none focus:border focus:border-slate-950 focus:ring-1 focus:ring-slate-950"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Button type="submit" title="Sign in" />
          </div>
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
