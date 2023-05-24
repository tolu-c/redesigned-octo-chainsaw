import { AuthContext } from "../context/authContext";
import { useContext, useState, useEffect } from "react";
import { FileProps } from "../types";
import { Document } from "react-pdf";

const API = process.env.REACT_APP_API;

export const FileDetail = ({ fileID }: { fileID: number }) => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const { authToken } = useContext(AuthContext);

  const filteredFile = files.find((file) => file.id === fileID);

  useEffect(() => {
    getFiles();
    // eslint-disable-next-line
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

  const renderFilePreview = () => {
    if (filteredFile) {
      const fileExtension = filteredFile.file.split(".").pop()?.toLowerCase();

      if (fileExtension === "pdf") {
        return (
          <Document file={`http://localhost:8000${filteredFile.file}`} />
          // <object
          //   data={`http://localhost:8000${filteredFile.file}`}
          //   type="application/pdf"
          //   className="w-full h-auto"
          // >
          //   <p>Your browser does not support PDF viewing.</p>
          // </object>
        );
      }

      if (fileExtension === "txt") {
        return (
          <iframe
            src={`http://localhost:8000${filteredFile.file}`}
            title="File Preview"
            width="100%"
            height="500px"
          ></iframe>
        );
      }

      if (
        fileExtension === "jpg" ||
        fileExtension === "jpeg" ||
        fileExtension === "png"
      ) {
        return (
          <img
            src={`http://localhost:8000${filteredFile.file}`}
            alt={filteredFile.user}
            className="w-auto h-auto max-h-64 object-contain object-center"
          />
        );
      }
    }

    return null;
  };

  return (
    <div className="p-4">
      {renderFilePreview()}
      <a
        href={`http://localhost:8000${filteredFile?.file}`}
        download
        target="_blank"
        rel="noreferrer"
        className="underline text-base font-medium hover:font-bold text-slate-700 hover:text-slate-800"
      >
        Download
      </a>
    </div>
  );
};
