import { AuthContext } from "../context/authContext";
import { fileData } from "../data/files";
import { FileProps } from "../types";
import { FileItem } from "./FileItem";
import { UploadPlus } from "./UI/UploadPlus";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API;

export const FileList = () => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    const response = await fetch(`${API}/files/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken?.access}`,
      },
    });
    const data = await response.json();

    setFiles(data);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4">
      {files && files.length !== 0 ? (
        files.map((file) => (
          <FileItem
            key={file.id}
            file={file.file}
            id={file.id}
            user={file.user}
          />
        ))
      ) : (
        <div className="w-full flex flex-col gap-2 justify-start">
          <h4 className="text-lg text-slate-800 font-medium">No files yet</h4>
          <Link
            to="/upload"
            className="text-base text-slate-600 hover:text-slate-800 hover:font-semibold"
          >
            Upload?
          </Link>
        </div>
      )}
      <UploadPlus />
    </div>
  );
};
