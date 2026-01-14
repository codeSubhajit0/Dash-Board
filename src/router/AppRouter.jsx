import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ErrorPage from "../pages/ErrorPage";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<ErrorPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
