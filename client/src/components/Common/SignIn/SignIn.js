import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import Button from "../../LandingPage/Button/Button";
import FindTxt from "./Find/FindTxt";
import SignInInput from "./SignInInput/SignInInput";
import SignInHeader from "./SignInHeader/SignInHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
const User = {
  user_id: "sesac",
  email: "test@example.com",
  hashed_password: "test2323@@@",
};
const SignIn = () => {
  const [user_id, setUser_Id] = useState("");
  const [idError, setIdError] = useState(false);
  const handleId = (e) => {
    setUser_Id(e.target.value);
    console.log(user_id);
    if (user_id !== User.user_id) {
      console.log("바보");
    } else {
      console.log("알라딘");
    }
  };

  return (
    <div className="signInWrapper">
      <div className="signInSection">
        <div className="signIn">
          <SignInHeader text={"로그인"} />
          <SignInInput
            type={"text"}
            text={<FontAwesomeIcon icon={faUser} />}
            value={user_id}
            placeholder={"아이디"}
            onChange={handleId}
          />
          <SignInInput
            type={"password"}
            text={<FontAwesomeIcon icon={faKey} />}
            placeholder={"비밀번호"}
          />
          <input onChange={handleId} />
          <br />
          {idError && (
            <div className="errorMessageWrap">
              아이디/비밀번호를 확인해주세요.
            </div>
          )}

          <div>
            <FindTxt />
          </div>
          <Button text={"로그인"} />
        </div>
      </div>
      {/* -----------------로그인input----------------- */}

      <div className="signInBottom">
        <h5>STARPL에 처음이신가요?</h5>
        <a>회원가입</a>
      </div>

      {/* -----------------회원가입안내글----------------- */}
    </div>
  );
};

export default SignIn;
