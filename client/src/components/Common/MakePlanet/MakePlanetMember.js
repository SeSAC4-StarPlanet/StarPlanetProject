import React from "react";
import TextField from "@mui/material/TextField";
import "./MakePlanetMember.scss";
export default function MakePlanetMember({ text }) {
  return (
    <div className="makePlanetMemberBox">
      <div className="makePlanetMeberAccount">{text}</div>
      <TextField
        id="outlined-search"
        label="유저 아이디를 입력해주세요 "
        type="search"
        style={{
          width: "90%",
        }}
      />
    </div>
  );
}
