import React, { useEffect, useState } from "react";

import FindTxt from "./FindTxt";
import SignInInput from "./SignInInput";
import SignInHeader from "./SignInHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [userID, setUser_Id] = useState("");
  const [idError, setIdError] = useState(false);
  const [hashedPW, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  const handleLogin = (e) => {
    if (userID) {
      alert("로그인 성공");
    } else {
      alert("아이디/비밀번호를 확인해주세요.");
    }
  };

  const handleIdOnchange = (e) => {
    setUser_Id(e.target.value);
  };

  const handlePwOnchange = (e) => {
    setPw(e.target.value);
  };

  return (
    <div className="signInWrapper">
      <div className="signInSection">
        <div className="signIn">
          <SignInHeader text={"로그인"} />
          <SignInInput
            type={"text"}
            text={<FontAwesomeIcon icon={faUser} />}
            value={userID}
            onChange={handleIdOnchange}
            placeholder={"아이디"}
          />
          <SignInInput
            type={"password"}
            text={<FontAwesomeIcon icon={faKey} />}
            value={hashedPW}
            placeholder={"비밀번호"}
            onChange={handlePwOnchange}
          />
          <br />
          {idError && pwError && (
            <div className="errorMessageWrap">
              아이디/비밀번호를 확인해주세요.
            </div>
          )}

          <div>
            <FindTxt />
          </div>

          <a className="loginBtn" onClick={handleLogin}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            START
          </a>
        </div>
      </div>
      {/* -----------------로그인input----------------- */}

      <div className="signInBottom">
        <div>STARPL에 처음이신가요?</div>
        <span onClick={() => alert("clicked")}>회원가입</span>
      </div>

      {/* -----------------회원가입안내글----------------- */}
    </div>
  );
};

export default SignIn;
