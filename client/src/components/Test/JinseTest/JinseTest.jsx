import React from "react";
import "./jinseTest.scss";
import StarMap from "../../../components/Common/StarMap/StarMap";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";
import SignUp from "../../Common/SignUp/SignUp";

const JinseTest = () => {
  return (
    <div>
      <StarMap />
      <div className="Sign_in_logo_wrapper">
        <img src={Main_Logo} />
      </div>
      <SignUp />
    </div>
  );
};

export default JinseTest;
