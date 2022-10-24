import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
// page component
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import SuccessSignUpPage from "../../pages/SuccessSignUpPage/SuccessSignUpPage";
import FindIdPage from "../../pages/FindIdPage/FindIdPage";
import ResetPw1Page from "../../pages/ResetPw1Page/ResetPw1Page";
import ResetPw2Page from "../../pages/ResetPw2Page/ResetPw2Page";
import DiaryWrite from "../../pages/Diary/Write/DiaryWrite";

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
    path: "/resetPw1",
    element: <ResetPw1Page />,
  },
  {
    path: "/resetPw2",
    element: <ResetPw2Page />,
  },
  {
    path: "/sionTest",
    element: <SionTest />,
  },

  {
    path: "/jinseTest",
    element: <JinseTest />,
  },
  {
    path: "/diary/write",
    element: <DiaryWrite />,
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
