import React from "react";
import "./sionTest.scss";

import StarMap from "../../Common/StarMap/StarMap";
import StarWarp from "../../Common/StarWarp/StarWarp";
// import Categorybar from "../../Common/Diary/Categorybar/Categorybar";
// import Diary_content from "../../Common/Diary/Diary_content/Diary_content";
import Diary_main from "../../Common/Diary/Diary_main";
import Header from "../../Common/Diary/Header/Header";
import SearchBar from "../../Common/Diary/SearchBar/SearchBar";
import Selector from "../../Common/Diary/Selector/Selector";
const SionTest = () => {
  return (
    <>
      <Header />
      <StarMap />
      <Diary_main planetTitle={"planetTitle"} />
    </>
  );
};

export default SionTest;
