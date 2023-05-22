import { fileData } from "../data/files";
import { FileItem } from "./FileItem";

export const FileList = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4">
      {fileData.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          url={file.url}
          type={file.type}
        />
      ))}
    </div>
  );
};
