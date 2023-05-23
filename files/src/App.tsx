import { Suspense, lazy, useContext, ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "./components/UI/Layout/Loader";
import { AuthContext } from "./context/authContext";
// import { ProtectedRoutesProps } from "./types";

const Home = lazy(() => import("./pages/Home"));
const File = lazy(() => import("./pages/File"));
const Files = lazy(() => import("./pages/Files"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Upload = lazy(() => import("./pages/Upload"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return <>{children}</>;
  }
};

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="files"
          element={
            <ProtectedRoute>
              <Files />
            </ProtectedRoute>
          }
        />
        <Route
          path="file/:id"
          element={
            <ProtectedRoute>
              <File />
            </ProtectedRoute>
          }
        />
        <Route
          path="upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
