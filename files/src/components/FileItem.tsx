import { FC } from "react";
// import FileViewer from "react-file-viewer";
import { FileItemProps, FileProps } from "../types";
import { Link } from "react-router-dom";

export const FileItem: FC<FileProps> = ({ id, file, user }) => {
  return (
    <div className="flex flex-col w-full rounded-lg hover:shadow-sm hover:border overflow-hidden">
      <img
        src={`http://localhost:8000/${file}`}
        alt={`${id}`}
        className="w-full h-auto object-top object-contain"
      />
      {/* <embed src={url} type={type} className="w-full h-auto" /> change this to a file preview package */}
      <div className="w-full p-2 flex justify-between items-center">
        <h4 className="text-lg md:text-base font-medium">{user}</h4>
        <Link
          to={`/files/${id}`}
          className="text-sm text-slate-700 hover:text-slate-800 hover:underline"
        >
          View
        </Link>
      </div>
    </div>
  );
};
