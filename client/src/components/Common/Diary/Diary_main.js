import React from "react";
import "./Diary_main.scss";

import Diary_content from "../../Common/Diary/Diary_content/Diary_content";
import Categorybar from "../../Common/Diary/Categorybar/Categorybar";
import Planet_name from "../../Common/Diary/Planet_name/Planet_name";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCalendarDays,
  faBookmark,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Category from "./Category/Category";
const Diary_main = ({ planetTitle }) => {
  return (
    <div className="Main_wrapper">
      <div className="Main_container_top">
        <div className="Planet_name_box">
          <Planet_name title={planetTitle} />
        </div>
        <div className="Modify_title_box">
          <Planet_name title={"2022"} />
        </div>
      </div>
      <div className="Main_container">
        <div className="Categorybar_box">
          <Category />
          {/* <Categorybar
            icon={<FontAwesomeIcon icon={faImage} />}
            category={"사진첩"}
          />
          <Categorybar
            icon={<FontAwesomeIcon icon={faCalendarDays} />}
            category={"일정"}
          />
          <Categorybar
            icon={<FontAwesomeIcon icon={faBookmark} />}
            category={"북마크"}
          />
          <Categorybar
            icon={<FontAwesomeIcon icon={faBook} />}
            category={"다이어리"}
          /> */}
        </div>
        <div className="Main_box">
          <div className="Diary_main_box">
            <div>
              <Diary_content
                title={"2022-10-18 오늘 할 일"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"2022-10-18 오늘 할 일"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"2022-10-18 오늘 할 일"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
            </div>
            <div>
              <Diary_content
                title={"2022-10-18 오늘 할 일"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"2022-10-18 오늘 할 일"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"2022-10-18 오늘 할 일"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary_main;
