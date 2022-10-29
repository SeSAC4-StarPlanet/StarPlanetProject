import React from "react";
import "./newPlanetBtn.scss";
import { Link } from "react-router-dom";
// 아이콘
import { GiRingedPlanet } from "react-icons/gi";

const NewPlanetBtn = () => {
  const happyNewYear = new Date();
  const year = happyNewYear.getFullYear();
  const month = happyNewYear.getMonth() + 1;
  const date = happyNewYear.getDate();
  const stringDate = `${year}.${month >= 10 ? month : "0" + month}.${
    date >= 10 ? date : "0" + date
  }`;

  return (
    <Link to={"/workspace/create"}>
      <div className="newPlanetBtnWrapper">
        <div className="img">
          <GiRingedPlanet />
        </div>
        <div className="text">
          <p>새 행성 만들기</p>
          <p className="date">Since {stringDate} ~</p>
        </div>
      </div>
    </Link>
  );
};

export default NewPlanetBtn;
