import { useParams } from "react-router-dom";
import { FileDetail } from "../components/FileDetail";

const File = () => {
  const { id } = useParams();
  return <FileDetail fileID={id!} />;
};

export default File;
