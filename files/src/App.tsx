import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./components/UI/Layout/Loader";

const Home = lazy(() => import("./pages/Home"));
const File = lazy(() => import("./pages/File"));
const Files = lazy(() => import("./pages/Files"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Upload = lazy(() => import("./pages/Upload"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="files" element={<Files />} />
        <Route path="files/:id" element={<File />} />
        <Route path="upload" element={<Upload />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
