import React from "react";
import "./SuccessSignUpPage.scss";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import SuccessSignUp from "../../components/Common/SuccessSignUp/SuccessSignUp";

const SuccessSignUpPage = () => {
  return (
    <div>
      <StarMap />
      <div className="successSignUpLogoWrapper">
        <img src={Main_Logo} />
      </div>
      <SuccessSignUp />
    </div>
  );
};

export default SuccessSignUpPage;
