import React from "react";
import "./writer.scss";
import Editor from "../../Editor/Editor";

// MUI 라이브러리
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";

// 아이콘
import { FaPlay } from "react-icons/fa";

const Writer = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#3c52b2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3c52b2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3c52b2",
      },
      "&:hover fieldset": {
        borderColor: "#3c52b2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3c52b2",
      },
    },
  });

  return (
    <div className="dairyWriterBackWrapper">
      <div className="dairyWriterWrapper">
        <div className="dairyWriterArrow" />
        <div className="dairyWriterTitleContainer">
          <CssTextField
            sx={{ width: "900px", color: "#3c52b2" }}
            rows={1}
            rowsMax={1}
            size="small"
            label="제목"
            variant="standard"
          />
          <div className="BtnBox">
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
              작성 완료
            </Button>
          </div>
        </div>
        <div className="dairyWriterEditorContainer">
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default Writer;
