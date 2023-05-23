import { FormEvent, ChangeEvent } from "react";
import { Button } from "./UI/Form/Button";

export const UploadPage = () => {
  const handleUpload = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = document.getElementById("upload") as HTMLInputElement;
    const file = fileInput.files?.[0];

    console.log({ submittedFile: file });

    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     const fileContent = e.target?.result;
    //     console.log(fileContent);
    //   };
    //   reader.readAsText(file);
    // }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
  };

  return (
    <div className="p-4 flex flex-col gap-4 justify-start font-inter">
      <h2 className="text-lg font-bold text-slate-950">Add Files</h2>
      <form
        className="w-full flex flex-col justify-start gap-3"
        onSubmit={handleUpload}
      >
        <div className="w-5/6 md:w-3/4 mx-auto">
          <label
            htmlFor="upload"
            className="w-full h-48 border border-dashed p-4 flex justify-center items-center rounded-md"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-base text-slate-800 font-medium cursor-pointer">
                Upload a file
              </p>
              <p className="text-sm text-slate-400 font-light">
                PNG, JPG, PDF up to 3MB
              </p>
            </div>
          </label>
          <input
            type="file"
            id="upload"
            name="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <Button type="submit" title="Upload File" />
      </form>
    </div>
  );
};
