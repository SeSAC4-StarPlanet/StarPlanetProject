import React from "react";
import "./Diary_content.scss";
import { ReactComponent as Logo } from "../../../../assets/img/LandingPage/second_page_logo.svg";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Diary_content = ({
  title,
  date,
  writer,
  content1,
  content2,
  content3,
  content4
}) => {
  return (
    <div className="diary_section">
      <div className="diary_container">
        <div className="diary_img_box">
          <Logo className="diary_img" />
        </div>
        <div className="diary_content_container">
          <div className="diary_txt_container">
            <div className="diary_txt_top_container">
              <p className="diary_title">
                {title}
              </p>
              <p className="diary_writer">
                {writer}
              </p>
            </div>
            <p className="diary_content">
              {content1}
            </p>
            <p className="diary_content">
              {content2}
            </p>
            <p className="diary_content">
              {content3}
            </p>
            <p className="diary_content">
              {content4}
            </p>
          </div>
          <div className="diary_footer_container">
            <p className="diary_date">
              {date}
            </p>
            <div className="diary_footer_btn_container">
              <div className="diary_footer_btn">
                <FaRegBookmark />
              </div>
              <div className="diary_footer_btn">
                <BsThreeDotsVertical />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary_content;
