import React from "react";
import "./sionTest.scss";

import StarMap from "../../Common/StarMap/StarMap";
import StarWarp from "../../Common/StarWarp/StarWarp";
// import Categorybar from "../../Common/Diary/Categorybar/Categorybar";
import Diary_content from "../../Common/Diary/Diary_content/Diary_content";
import Diary_main from "../../Common/Diary/Diary_main";
import Header from "../../Common/Diary/Header/Header";
import SearchBar from "../../Common/Diary/SearchBar/SearchBar";
import Selector from "../../Common/Diary/Selector/Selector";
import Editor from "../../Common/Editor/Editor";
import Writer from "../../Common/Diary/Writer/Writer";
const SionTest = () => {
  return (
    <div className="back">
      {/* <Diary_content
        title={"오늘 할 일"}
        writer={"염시온"}
        date={"2022-01-01"}
        content1={"코딩공부하기"}
        content2={"코딩공부하기"}
        content3={"코딩공부하기"}
        content4={"코딩공부하기"}
      /> */}
      {/* <Editor /> */}
      <StarMap />
      <Header />
      <Writer />
      {/* <Diary_main planetTitle={"planetTitle"} /> */}
    </div>
  );
};

export default SionTest;
