import React from "react";
import "./FindTxt.scss";

function FindTxt() {
  return (
    <div className="Find_section">
      <div className="Find_container">
        <button className="Find">아이디 찾기</button>
        <div className="Find">｜</div>
        <button className="Find">비밀번호 재설정</button>
      </div>
    </div>
  );
}

export default FindTxt;
