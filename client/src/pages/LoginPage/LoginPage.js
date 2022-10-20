import React from "react";
import "./LoginPage.scss";
import SignIn from "../../components/Common/SignIn/SignIn";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
const LoginPage = () => {
  return (
    <div>
      <StarMap />
      <div className="Sign_in_logo_wrapper">
        <img src={Main_Logo} />
      </div>
      <SignIn />
    </div>
  );
};

export default LoginPage;
