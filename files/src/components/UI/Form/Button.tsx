import { FC } from "react";
import { ButtonProps } from "../../../types";

export const Button: FC<ButtonProps> = ({ title, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-base font-semibold text-white bg-slate-800 hover:bg-slate-950 p-2 px-4 rounded-lg"
    >
      {title}
    </button>
  );
};
