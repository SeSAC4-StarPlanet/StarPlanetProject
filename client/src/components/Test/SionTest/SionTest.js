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
import Read from "../../Common/Diary/Read/Read";

// 페이지
import DiaryMain from "../../../pages/Diary/Main/DiaryMain";
import DiaryWrite from "../../../pages/Diary/Write/DiaryWrite";
const SionTest = () => {
  return (
    <>
      {/* <DiaryMain /> */}
      <div className="back">
        <StarMap />
        <Header />
        <Writer />
      </div>
    </>
  );
};

export default SionTest;
