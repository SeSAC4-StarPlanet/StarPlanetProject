import React, { useState } from "react";

const SignUpInput = ({ value, onChange }) => {
  const [hashedPW, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);

  const onChangePwChk = (e) => {
    setPwError(e.target.value !== value);
    setPwCheck(e.target.value);
  };

  return (
    <>
      <div className="signUpInputContainer">
        <div className="signUpInputTitle">PW</div>
        <input
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={value}
          onChange={onChange}
          className="signUpInput"
          required
        ></input>
      </div>
      <div>
        {pwError ? (
          <div className="errorMessageWrap">비밀번호가 일치하지 않습니다.</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
      <div className="signUpInputContainer">
        <div className="signUpInputTitle">PW Confirm</div>
        <input
          type="password"
          required
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={pwCheck}
          onChange={onChangePwChk}
          className="signUpInput"
        ></input>
      </div>
      <div>
        {pwError ? (
          <div className="errorMessageWrap">비밀번호가 일치하지 않습니다.</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default SignUpInput;
