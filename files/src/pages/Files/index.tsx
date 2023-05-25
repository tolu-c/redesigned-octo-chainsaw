import { Routes, Route } from "react-router-dom";
import Files from "./Files";
import File from "./File";
import Upload from "./Upload";
import { Layout } from "../../components/UI/Layout";
import PageNotFound from "../PageNotFound";

const FilesIndex = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Files />} />
        <Route path=":id" element={<File />} />
        <Route path="upload" element={<Upload />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default FilesIndex;
