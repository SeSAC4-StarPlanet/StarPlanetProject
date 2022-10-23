import React, { useEffect, useState } from "react";

const User = {
  id: "sesac",
  email: "test@example.com",
  pw: "test2323@@@",
};

const SignUpInput = () => {
  const [user_id, setUser_id] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);

  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangePwChk = (e) => {
    setPwError(e.target.value !== pw);
    setPwCheck(e.target.value);
  };

  return (
    <>
      <div className="signUpInputContainer">
        <div className="signUpInputTitle">PW</div>
        <input
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={pw}
          onChange={onChangePw}
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
