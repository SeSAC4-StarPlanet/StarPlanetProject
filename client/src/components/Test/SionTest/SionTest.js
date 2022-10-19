import React from "react";
import "./sionTest.scss";

import StarMap from "../../Common/StarMap/StarMap";
import StarWarp from "../../Common/StarWarp/StarWarp";
import Categorybar from "../../Common/Diary/Categorybar/Categorybar";
import Diary_content from "../../Common/Diary/Diary_content/Diary_content";
import Diary_main from "../../Common/Diary/Diary_main";

const SionTest = () => {
  return (
    <div>
      <StarMap />
      {/* <Diary_content
        title={"title"}
        content1={"content1"}
        content2={"content2"}
        content3={"content3"}
        content4={"content4"}
      /> */}
      <Diary_main planetTitle={"planetTitle"} />
    </div>
  );
};

export default SionTest;
