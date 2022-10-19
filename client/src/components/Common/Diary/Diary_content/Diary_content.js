import React from "react";
import "./Diary_content.scss";
import { ReactComponent as Logo } from "../../../../assets/img/LandingPage/second_page_logo.svg";

const Diary_content = ({ title, content1, content2, content3, content4 }) => {
  return (
    <div className="Diary_section">
      <div className="Diary_container">
        <div className="Diary_img_box">
          <Logo className="Diary_img" />
        </div>
        <div className="Diary_txt_container">
          <span className="Diary_title">{title}</span>
          <span className="Diary_content">{content1}</span>
          <span className="Diary_content">{content2}</span>
          <span className="Diary_content">{content3}</span>
          <span className="Diary_content">{content4}</span>
        </div>
      </div>
    </div>
  );
};

export default Diary_content;
