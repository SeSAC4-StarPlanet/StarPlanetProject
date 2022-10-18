import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/common.scss";
import reportWebVitals from "./reportWebVitals";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Sign_in from "./components/Common/Sign_in/Sign_in";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <LandingPage /> */}
    <Sign_in />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
