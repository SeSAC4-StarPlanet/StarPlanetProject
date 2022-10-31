import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import FindIdEmailInput from "../../components/Common/FindId/FindEmailInput";
import FindIdBtn from "../../components/Common/FindId/FindIdBtn";
import FindIdIdInput from "../../components/Common/FindId/FindIdIdInput";
import "./FindIdPage.scss";
import axios from "axios";

const FindIdPage = () => {
  const [userID, setuserId] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const findIdhandle = () => {
    axios({
      method: "get",
      url: "http://localhost:8000/api/auth/findID",
      data: {
        userID: userID,
        email: email,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("An error occurred:", err.response);
      });
  };
  return (
    <>
      <StarMap />
      <div className="findIdLogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="findIdWrapper">
        <div className="findIdSection">
          <div className="findIdHeaderSection">
            <a className="findIdHeader">아이디 찾기</a>
          </div>
          <div className="findIdtext">회원님의 아이디를 찾아드리겠습니다.</div>
          <div className="findIdtext">
            회원가입시 기재하셨던 정보를 입력해주세요.
          </div>
          <FindIdIdInput
            value={userID}
            onChange={(e) => {
              setuserId(e.target.value);
              console.log(e.target.value);
            }}
          />
          <FindIdEmailInput
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
              console.log(e.target.value);
            }}
          />
          <FindIdBtn onClick={findIdhandle} text={"아이디 찾기"} />
        </div>
      </div>
    </>
  );
};

export default FindIdPage;
