import React from "react";
import "./jinseTest.scss";
import Sign_in from "../../Common/Sign_in/Sign_in";
import StarMap from "../../Common/StarMap/StarMap";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";
const JinseTest = () => {
  return (
    <div>
      <StarMap />
      <div className="Sign_in_logo_wrapper">
        <img src={Main_Logo} />
      </div>
      <Sign_in />
    </div>
  );
};

export default JinseTest;
