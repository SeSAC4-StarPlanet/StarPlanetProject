import React from "react";
import "./Diary_main.scss";
import Diary_content from "../../Common/Diary/Diary_content/Diary_content";
import Planet_name from "../../Common/Diary/Planet_name/Planet_name";
import Category from "./Category/Category";
import MemberBox from "./MemberBox/MemberBox";
import Selector from "./Selector/Selector";
import IconButton from "@mui/material/IconButton";
import { FaPen } from "react-icons/fa";

const Diary_main = ({ planetTitle }) => {
  return (
    <div className="Main_wrapper">
      <div className="mainArrow" />
      <div className="Main_container_top">
        <div className="Planet_name_box">
          <Planet_name title={planetTitle} />
        </div>
        <div className="Modify_title_box">
          <Planet_name title={"2022"} />
          <IconButton>
            <FaPen />
          </IconButton>
        </div>
      </div>
      <div className="Main_container">
        <div className="Categorybar_box">
          <div>
            <Category />
          </div>
          <div>
            <MemberBox />
          </div>
        </div>
        <div className="Main_box">
          <div className="Diary_selector_box">
            <Selector />
          </div>
          <div className="Diary_main_box">
            <div>
              <Diary_content
                title={"오늘 할 일"}
                writer={"염시온"}
                date={"2022-01-01"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"오늘 할 일"}
                writer={"염시온"}
                date={"2022-01-01"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"오늘 할 일"}
                writer={"염시온"}
                date={"2022-01-01"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
            </div>
            <div>
              <Diary_content
                title={"오늘 할 일"}
                writer={"염시온"}
                date={"2022-01-01"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"오늘 할 일"}
                writer={"염시온"}
                date={"2022-01-01"}
                content1={"코딩공부하기"}
                content2={"코딩공부하기"}
                content3={"코딩공부하기"}
                content4={"코딩공부하기"}
              />
              <Diary_content
                title={"오늘 할 일"}
                writer={"염시온"}
                date={"2022-01-01"}
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
