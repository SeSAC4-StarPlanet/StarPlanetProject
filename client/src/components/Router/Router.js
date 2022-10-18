import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page component
import  LandingPage  from "../../pages/LandingPage/LandingPage";
import Sign_in from "../Common/Sign_in/Sign_in";

// test component
import JinseTest from "../Test/JinseTest/JinseTest";
import SionTest from "../Test/SionTest/SionTest";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },
    {     
    path: "/login",
    element: <Sign_in/>,
    },
    {     
    path: "/sionTest",
    element: <SionTest/>,
    },
    {     
    path: "/jinseTest",
    element: <JinseTest/>,
    },
    
]);

const Router = () => {
  return <><RouterProvider router={router}/></>;
};

export default Router;
