import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPw1Page.scss";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import ResetPw1Btn from "../../components/Common/ResetPw1/ResetPw1Btn";
import ResetPw1NameInput from "../../components/Common/ResetPw1/ResetPw1NameInput";
import ResetPw1EmailInput from "../../components/Common/ResetPw1/ResetPw1EmailInput";
import ResetPw1IdInput from "../../components/Common/ResetPw1/ResetPw1IdInput";
import axios from "axios";

const ResetPw1Page = () => {
  const [userID, setuserID] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const ResetPassword = (e) => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/auth/login",
      data: { userID: userID, username: username, email: email },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <StarMap />
      <div className="resetPw1LogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="resetPw1Wrapper">
        <div className="resetPw1Section">
          <div className="resetPw1HeaderBox">
            <div className="resetPw1Header">비밀번호 재설정</div>
          </div>
          <div className="resetPw1Text">새로운 비밀번호로 변경해드립니다.</div>
          <div className="resetPw1Text">
            회원가입시 기재하셨던 정보를 입력해주세요.
          </div>
          <ResetPw1IdInput
            value={userID}
            onChange={(e) => {
              setuserID(e.target.value);
              console.log(e.target.value);
            }}
          />
          <ResetPw1NameInput
            onChange={(e) => {
              setusername(e.target.value);
              console.log(e.target.value);
            }}
          />
          <ResetPw1EmailInput
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(e.target.value);
            }}
          />
          <ResetPw1Btn text={"비밀번호 재설정"} onClick={ResetPassword} />
        </div>
      </div>
    </>
  );
};

export default ResetPw1Page;
