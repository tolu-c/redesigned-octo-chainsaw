import { AuthContext } from "../context/authContext";
import { fileData } from "../data/files";
import { useContext, useState, useEffect } from "react";
import { FileProps } from "../types";

const API = process.env.REACT_APP_API;

export const FileDetail = ({ fileID }: { fileID: number }) => {
  // const filteredFile = fileData.filter((file) => file.name === fileID)[0];
  const [files, setFiles] = useState<FileProps[]>([]);
  const { authToken } = useContext(AuthContext);

  const filteredFile = files.find((file) => file.id === fileID);

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
    <div className="p-4">
      <img src={filteredFile?.file} alt={filteredFile?.user} />
      <a
        href={filteredFile?.file}
        download={true}
        className="underline text-base font-medium hover:font-bold text-slate-700 hover:text-slate-800"
      >
        Download {filteredFile?.file}
      </a>
    </div>
  );
};
