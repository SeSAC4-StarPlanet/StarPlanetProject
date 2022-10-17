import React from "react";
import "./Find_txt.scss";

function Find_txt() {
  return (
    <div className="Find_section">
      <div className="Find_container">
        <button className="Find_id">아이디 찾기</button>
        <div>｜</div>
        <button className="Find_pw">비밀번호 재설정</button>
      </div>
    </div>
  );
}

export default Find_txt;
