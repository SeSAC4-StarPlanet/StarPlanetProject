import React from "react";
import "./FindIdPage.scss";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import FindId from "../../components/Common/FindId/FindId";

const JinseTest = () => {
  return (
    <div>
      <StarMap />
      <div className="findIdLogoWrapper">
        <img src={Main_Logo} />
      </div>
      <FindId />
    </div>
  );
};

export default JinseTest;
