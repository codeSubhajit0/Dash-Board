import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ErrorPage from "../pages/ErrorPage";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {

  const router = createBrowserRouter([
      {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <DashBoard />
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: "/setting",
            element: <Settings />
          }
        ]
      }
    ])

  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;
