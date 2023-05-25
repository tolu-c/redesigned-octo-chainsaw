import { PlusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export const UploadPlus = () => {
  const navigate = useNavigate();
  return (
    <span
      className="absolute bottom-8 right-8 w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-950 text-slate-100 z-40 cursor-pointer"
      onClick={() => navigate("upload")}
    >
      <PlusIcon className="w-6 md:w-8 h-6 md:h-8" />
    </span>
  );
};
