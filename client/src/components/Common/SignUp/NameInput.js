import React from "react";

const NameInput = ({ value, onChange }) => {
  return (
    <>
      <div className="signUpInputContainer">
        <div className="signUpInputTitle">Name</div>
        <input
          type="text"
          className="signUpInput"
          placeholder={"홍길동"}
          onChange={onChange}
          value={value}
        ></input>
      </div>
      <div>
        <div className="errorMessageWrap">{""}</div>
      </div>
    </>
  );
};

export default NameInput;
