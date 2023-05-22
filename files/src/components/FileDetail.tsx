import { fileData } from "../data/files";

export const FileDetail = ({ fileID }: { fileID: string }) => {
  const filteredFile = fileData.filter((file) => file.name === fileID)[0];

  return (
    <div>
      <img src={filteredFile.url} alt={filteredFile.name} />
      <a
        href={filteredFile.url}
        download={true}
        className="underline text-base font-medium hover:font-bold text-slate-700 hover:text-slate-800"
      >
        Download {filteredFile.name}
      </a>
    </div>
  );
};
