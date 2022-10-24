import React from "react";
import "./ResetPw2Page.scss";

import ResetPw2 from "../../components/Common/ResetPw2/ResetPw2";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";

// 페이지

const ResetPw2Page = () => {
  return (
    <>
      <StarMap />
      <div className="ResetPw2LogoWrapper">
        <img src={Main_Logo} />
      </div>

      <ResetPw2 />
    </>
  );
};

export default ResetPw2Page;
