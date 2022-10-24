import React from "react";
import "./ResetPw1Page.scss";
import ResetPw1 from "../../components/Common/ResetPw1/ResetPw1";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";

// 페이지

const ResetPw1Page = () => {
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

export default ResetPw1Page;
