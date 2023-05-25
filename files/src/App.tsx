import { Suspense, lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./components/UI/Layout/Loader";
import { AuthContext } from "./context/authContext";

const RootPage = lazy(() => import("./pages/Root"));
const HomeIndex = lazy(() => import("./pages/Home/index"));
const FileIndex = lazy(() => import("./pages/Files/index"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {user && <Route path="files/*" element={<FileIndex />} />}
        {!user && <Route path="home/*" element={<HomeIndex />} />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
