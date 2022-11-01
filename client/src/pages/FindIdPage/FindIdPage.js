import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import FindIdEmailInput from "../../components/Common/FindId/FindEmailInput";
import FindIdBtn from "../../components/Common/FindId/FindIdBtn";
import FindIdNameInput from "../../components/Common/FindId/FindIdNameInput";
import "./FindIdPage.scss";
import axios from "axios";

const FindIdPage = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const findID = () => {
    axios({
      method: "get",
      url: "/auth/findID",
      data: {
        username: username,
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
          <FindIdNameInput
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
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
          <FindIdBtn onClick={findID} text={"아이디 찾기"} />
        </div>
      </div>
    </>
  );
};

export default FindIdPage;
