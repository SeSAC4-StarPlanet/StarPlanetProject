import React from "react";
import "./jinseTest.scss";

import ResetPw1 from "../../Common/ResetPw1/ResetPw1";
import StarMap from "../../Common/StarMap/StarMap";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";

// 페이지

const JinseTest = () => {
  return (
    <>
      <StarMap />
      <div className="ResetPw1LogoWrapper">
        <img src={Main_Logo} />
      </div>

      <ResetPw1 />
    </>
  );
};

export default JinseTest;
