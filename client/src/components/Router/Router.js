import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Redirect,
} from "react-router-dom";
import axios from "axios";
// css
import "../../styles/common.scss";

// page component
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import SuccessSignUpPage from "../../pages/SuccessSignUpPage/SuccessSignUpPage";
import FindIdPage from "../../pages/FindIdPage/FindIdPage";
import ResetPw1Page from "../../pages/ResetPw1Page/ResetPw1Page";
import ResetPw2Page from "../../pages/ResetPw2Page/ResetPw2Page";
import ModifyPage from "../../pages/ModifyPage/ModifyPage";
import DiaryWrite from "../../pages/Diary/Write/DiaryWrite";
import WorkSpaceMain from "../../pages/WorkSpace/Main/WorkSpaceMain";
import MakePlanetPage from "../../pages/MakePlanetPage/MakePlanetPage";
import DiaryMain from "../../pages/Diary/Main/DiaryMain";
import DiaryRead from "../../pages/Diary/Read/DiaryRead";
import AlbumIndividual from "../../pages/Album/Individual/AlbumIndividual";
import AlbumMain from "../../pages/Album/Main/AlbumMain";
import Page404 from "../../pages/Page404/Page404";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Contact from "../../pages/Contact/Contact";
// test component
import JinseTest from "../Test/JinseTest/JinseTest";
import SionTest from "../Test/SionTest/SionTest";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const authorizedRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
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
    path: "/modifyInfo",
    element: <ModifyPage />,
  } , {
    path: "/page404",
    element: <Page404 />,
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
  {
    path: "/diary/main",
    element: <DiaryMain />,
  },
  {
    path: "/diary/Read",
    element: <DiaryRead />,
  },
  {
    path: "/workspace/main",
    element: <WorkSpaceMain />,
  },
  {
    path: "/workspace/create",
    element: <MakePlanetPage />,
  }
  ,
  {
    path: "/album/main",
    element: <AlbumMain />,
  },
  ,
  {
    path: "/album/individual",
    element: <AlbumIndividual />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const unauthorizationRouter = createBrowserRouter([
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
]);

const Router = () => {
  let token =
    localStorage.getItem("token") !== null ? localStorage.getItem("token") : "";

  return (
    <>
      {localStorage.getItem("token") !== null ? (
        <RouterProvider router={authorizedRouter} />
      ) : (
        <RouterProvider router={unauthorizationRouter} />
      )}
    </>
  );
};

export default Router;
