import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page component
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import SuccessSignUpPage from "../../pages/SuccessSignUpPage/SuccessSignUpPage";
import FindIdPage from "../../pages/FindIdPage/FindIdPage";
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
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/successSignUp",
    element: <SuccessSignUpPage />,
  },
  {
    path: "/findId",
    element: <FindIdPage />,
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
