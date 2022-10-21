import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
// page component
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

// test component
import JinseTest from "../Test/JinseTest/JinseTest";
import SionTest from "../Test/SionTest/SionTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sionTest",
    element: <SionTest />,
  },
  {
    path: "/jinseTest",
    element: <JinseTest />,
  },
]);

const Router = () => {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
