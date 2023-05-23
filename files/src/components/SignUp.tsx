import { FormEvent, useRef } from "react";
import { Button } from "./UI/Form/Button";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
      email: emailRef.current?.value,
    };
    console.log(formData);
  };

  return (
    <div className="flex gap-4 justify-center">
      <div className="flex flex-col gap-8 w-full items-center">
        <h2 className="text-slate-950 text-lg md:text-xl font-semibold w-max">
          Create a new account
        </h2>
        <form
          onSubmit={handleRegister}
          className="w-5/6 md:w-3/4 flex flex-col gap-4"
        >
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-800 cursor-pointer"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              ref={emailRef}
              className="rounded-md shadow focus:shadow-md focus:outline-none focus:border focus:border-slate-950 focus:ring-1 focus:ring-slate-950"
            />
          </div>
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
            <Button type="submit" title="Register" />
          </div>
        </form>
        <div className="">
          <p className="text-sm font-normal text-slate-700">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-slate-950 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
