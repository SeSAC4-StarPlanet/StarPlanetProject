import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Input_pw from "./components/Common/Input_pw/Input_pw";
import Input_id from "./components/Common/Input_id/Input_id";
import Sign_in from "./components/Common/Sign_in/Sign_in";
import Login_Btn from "./components/Common/Btn/Login_Btn";
import Find_txt from "./components/Common/Find/Find_txt";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <LandingPage />
    <Input_pw />
    <Input_id />
    <Sign_in />
    <Login_Btn />
    <Find_txt />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
