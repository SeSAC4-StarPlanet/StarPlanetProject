import * as React from "react";
import Button from "@mui/material/Button";
import "./MakeMemberBtn.scss";

export default function MakeMemberBtn() {
  return (
    <div className="MakeMemberBtnBox">
      <Button
        variant="contained"
        style={{
          width: "50",
        }}
      >
        등록
      </Button>
    </div>
  );
}
