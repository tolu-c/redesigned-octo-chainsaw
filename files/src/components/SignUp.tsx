import { FormEvent, useRef, useState } from "react";
import { Button } from "./UI/Form/Button";
import { Link, useNavigate } from "react-router-dom";
import { RegisterData } from "../types";

const API = process.env.REACT_APP_API;

export const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const userSignUp = async (data: RegisterData) => {
    const response = await fetch(`${API}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      navigate("/login");
    } else {
      if (response.ok) {
        navigate("/login");
      } else {
        setErrorMessage(
          responseData.username
            ? responseData.username[0]
            : responseData.email
            ? responseData.email[0]
            : responseData.password
            ? responseData.password[0]
            : "Something went wrong"
        );
      }
    }
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: RegisterData = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
      email: emailRef.current!.value,
    };
    userSignUp(formData);
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
              required
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
            <Button type="submit" title="Register" />
          </div>
          {errorMessage && (
            <p className="text-sm text-amber-700 font-medium">{errorMessage}</p>
          )}
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
