import { FormEvent, ChangeEvent, useContext, useState } from "react";
import { Button } from "./UI/Form/Button";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API;

export const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { authToken, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fileUploadHandler = async (data: FormData) => {
    const response = await fetch(`${API}/upload-file/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken?.access}`,
      },
      body: data,
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log("uploaded");
      navigate(`/files/${responseData.id}`);
    } else {
      console.log("Error:", responseData);
    }
  };

  const handleUpload = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("user", user!.user_id);

      fileUploadHandler(formData);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="p-4 flex flex-col gap-4 justify-start font-inter">
      <h2 className="text-lg font-bold text-slate-950">Add Files</h2>
      <form
        className="w-full flex flex-col justify-start gap-3"
        onSubmit={handleUpload}
        encType="multipart/form-data"
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
        <div className="w-1/2 md:w-1/4">
          <Button type="submit" title="Upload File" />
        </div>
      </form>
    </div>
  );
};
