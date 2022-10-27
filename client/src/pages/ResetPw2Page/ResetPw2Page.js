import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPw2Page.scss";
import ResetPw2PwInput1 from "../../components/Common/ResetPw2/ResetPw2PwInput1";
import ResetPw2PwInput2 from "../../components/Common/ResetPw2/ResetPw2PwInput2";
import StarMap from "../../components/Common/StarMap/StarMap";
import ResetPw2Btn from "../../components/Common/ResetPw2/ResetPw2Btn";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import axios from "axios";

const ResetPw2Page = () => {
  const [hashedPW, setPW] = useState("");
  const navigate = useNavigate();

  const Reset = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/user",
      header: { withCredentials: true },
      data: {
        hashedPW: hashedPW,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <StarMap />
      <div className="resetPw2LogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="resetPw2Wrapper">
        <div className="resetPw2Section">
          <div className="resetPw2HeaderSection">
            <div className="resetPw2Header">비밀번호 재설정</div>
          </div>
          <div className="resetPw2Text">새로운 비밀번호를 입력해주세요.</div>
          <div className="resetPw2Text"></div>
          <ResetPw2PwInput1
            onChange={(e) => {
              setPW(e.target.value);
              console.log(e.target.value);
            }}
          />
          <ResetPw2PwInput2
            onChange={(e) => {
              setPW(e.target.value);
              console.log(e.target.value);
            }}
          />
          <div className="btnBox">
            <ResetPw2Btn text={"비밀번호 재설정"} onClick={Reset} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPw2Page;
