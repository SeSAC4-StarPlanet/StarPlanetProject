import React, { useState } from "react";
import "./read.scss";

import Planet_name from "../Planet_name/Planet_name";
import Category from "../Category/Category";
import MemberBox from "../MemberBox/MemberBox";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

// 아이콘
import Avatar from "@mui/material/Avatar";
import { FaPlay } from "react-icons/fa";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3c52b2",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3c52b2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});
const Read = ({ planetTitle }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mainBackWrapper">
      <div className="mainWrapper">
        <div className="mainArrow" />
        <div className="MainContainerTop">
          <div className="Planet_name_box">
            <Planet_name title={"2022"} />
          </div>
          <div className="Modify_title_box">
            <Planet_name title={"2022"} />
          </div>
        </div>
        <div className="Main_container">
          {/* 왼쪽 메뉴바 */}
          <div className="Categorybar_box">
            <div>
              <Category />
            </div>
            <div>
              <MemberBox />
            </div>
          </div>
          {/* 메인 컨텐츠 */}
          <div className="Main_box">
            <div className="diaryReaderWrapper">
              {/* 맨위 */}
              <div className="diaryReaderTopContainer">
                <div className="diaryReaderChoiced">2022</div>
                <div className="diaryReaderTitle">제목</div>
              </div>
              {/* 작성자 */}
              <div className="diaryReaderWriterWrapper">
                <ListItem sx={{ paddingLeft: "0" }}>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Avatar sx={{ width: 30, height: 30 }} />
                  </ListItemIcon>
                  <ListItemText primary={"시온"}></ListItemText>
                </ListItem>
              </div>
              <div className="diaryReaderContent">
                {/* 임시 내용 */}
                <p>ㅇㄴ</p>
              </div>
              <div className="diaryReaderCommentWrapper">
                <div className="diaryReaderCommentTitle">수다수다</div>
                <div className="diaryReaderCommentContainer">
                  <div className="diaryReaderCommentBox">
                    <div className="diaryReaderCommentWriter">아이디</div>
                    <div className="diaryReaderCommentContent">댓글내용</div>
                  </div>
                  {/* 댓글 */}
                  <div className="diaryReaderCommentBox">
                    <div className="diaryReaderCommentWriter">아이디</div>
                    <div className="diaryReaderCommentContent">댓글내용</div>
                  </div>
                </div>
              </div>
              {/* 댓글 작성창 */}
              <div className="diaryReaderEditorWrapper">
                <CssTextField
                  sx={{ width: "100%" }}
                  label="댓글 작성"
                  multiline
                  rows={4}
                  value={value}
                  onChange={handleChange}
                  variant="filled"
                />
                <div className="diaryReaderBtnWrapper">
                  <Button
                    sx={{
                      backgroundColor: "#0D0D7E",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#3c52b2",
                      },
                    }}
                    variant="contained"
                    endIcon={<FaPlay />}
                  >
                    등록
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
