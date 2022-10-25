import React, { useState } from "react";
import FindTxt from "../../components/Common/SignIn/FindTxt";
import SignInInput from "../../components/Common/SignIn/SignInInput";
import SignInHeader from "../../components/Common/SignIn/SignInHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import "./LoginPage.scss";
import axios from "axios";

const SignIn = () => {
  const [userID, setuserId] = useState("");
  const [hashedPW, setPw] = useState("");

  const handleLogin = (e) => {
    if (userID === "" || hashedPW === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
    axios
      .post("http://localhost:8000/api/user/login", {
        withCredentials: true,
        userID: userID,
        hashedPW: hashedPW,
      })
      .then((res) => {
        console.log("Well done!");
        console.log("User token", res.data.jwt);
      })
      .catch((err) => {
        console.log("An error occurred:", err.response);
      });
  };

  return (
    <div>
      <StarMap />
      <div className="signUpLogoWrapper">
        <img src={Main_Logo} />
      </div>
      <div className="signInWrapper">
        <div className="signInSection">
          <div className="signIn">
            <SignInHeader text={"로그인"} />
            <SignInInput
              type={"text"}
              text={<FontAwesomeIcon icon={faUser} />}
              value={userID}
              onChange={(e) => {
                setuserId(e.target.value);
                console.log(e.target.value);
              }}
              placeholder={"아이디"}
            />
            <SignInInput
              type={"password"}
              text={<FontAwesomeIcon icon={faKey} />}
              value={hashedPW}
              placeholder={"비밀번호"}
              onChange={(e) => {
                setPw(e.target.value);
                console.log(e.target.value);
              }}
            />
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

        <div className="signInBottom">
          <div>STARPL에 처음이신가요?</div>
          <span onClick={() => alert("clicked")}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
