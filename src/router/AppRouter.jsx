import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ErrorPage from '../pages/ErrorPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
