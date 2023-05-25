import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AboutPage from "./About";
import ContactPage from "./Contact";
import { HomeLayout } from "../../components/UI/Layout/HomeLayout";
import PageNotFound from "../PageNotFound";

const HomeIndex = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HomeLayout>
  );
};

export default HomeIndex;
