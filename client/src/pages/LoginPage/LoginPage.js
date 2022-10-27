import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import FindTxt from "../../components/Common/SignIn/FindTxt";
import SignInInput from "../../components/Common/SignIn/SignInInput";
import SignInHeader from "../../components/Common/SignIn/SignInHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import SocialBtn from "../../components/Common/SignIn/SocialBtn";
import Naver_Btn from "../../assets/img/LoginBtn/naverBtn.png";
import Kakao_Btn from "../../assets/img/LoginBtn/kakaoBtn.png";
import Google_Btn from "../../assets/img/LoginBtn/googleBtn.png";
import Github_Btn from "../../assets/img/LoginBtn/githubBtn.png";
import "./LoginPage.scss";
import axios from "axios";

const SignIn = () => {
  const [userID, setuserId] = useState("");
  const [hashedPW, setPw] = useState("");
  const navigate = useNavigate();

  const handleLogin = useCallback((e) => {
    if (userID === "" || hashedPW === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:8000/api/auth/login",
      header: { withCredentials: true },
      data: { userID: userID, hashedPW: hashedPW },
    })
      .then((res) => {
        console.log(res);
        console.log("User token", res.data.jwt);
      })
      .catch((err) => {
        console.log("An error occurred:", err.response);
      });
  });

  return (
    <div>
      <StarMap />
      <div className="signUpLogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="signInWrapper">
        <div className="signInSection">
          <div className="signIn">
            <SignInHeader text={"로그인"} />
            <SignInInput
              type={"text"}
              text={<FontAwesomeIcon icon={faUser} />}
              value={userID}
              setData={setuserId}
              placeholder={"아이디"}
            />
            <SignInInput
              type={"password"}
              text={<FontAwesomeIcon icon={faKey} />}
              value={hashedPW}
              placeholder={"비밀번호"}
              setData={setPw}
            />
            <div>
              <FindTxt />
            </div>

            <a className="loginBtn" onClick={handleLogin}>
              <span />
              <span />
              <span />
              <span />
              START
            </a>

            <div className="socialBtn">
              <SocialBtn
                src={Naver_Btn}
                href={"http://localhost:8000/auth/naver"}
              />
              <SocialBtn
                src={Kakao_Btn}
                href={"http://localhost:8000/auth/kakao"}
              />
              <SocialBtn
                src={Google_Btn}
                href={"http://localhost:8000/auth/google"}
              />
              <SocialBtn
                src={Github_Btn}
                href={"http://localhost:8000/auth/github"}
              />
            </div>
          </div>
        </div>

        <div className="signInBottom">
          <div>STARPL에 처음이신가요?</div>
          <span onClick={() => navigate("/Signup")}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
