import React, { useState } from "react";
import "./FindIdIdInput.scss";

const FindIdIdInput = ({ value, onChange }) => {
  const [userID, setUser_id] = useState("");

  return (
    <>
      <div className="findIdIdInputContainer">
        <div className="findIdIdInputTitle">ID</div>
        <input
          className="findIdIdInput"
          placeholder="아이디를 입력해주세요"
          value={value}
          onChange={onChange}
          type="text"
        ></input>
      </div>
      <div>
        {value ? (
          <div className="errorMessageWrap">{""}</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default FindIdIdInput;
