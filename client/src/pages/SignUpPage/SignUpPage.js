import React, { useState } from "react";
import "./SignUpPage.scss";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import SignUpHeader from "../../components/Common/SignUp/SignUpHeader";
import IdInput from "../../components/Common/SignUp/IdInput";
import PwInput from "../../components/Common/SignUp/PwInput";
import NameInput from "../../components/Common/SignUp/NameInput";
import EmailInput from "../../components/Common/SignUp/EmailInput";
import Button from "../../components/Common/SignUp/Button";
import axios from "axios";

const SignUpPage = () => {
  const [userID, setuserID] = useState("");
  const [hashedPW, setPW] = useState("");
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");

  const handleForm = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/user",
      header: { withCredentials: true },
      data: {
        userID: userID,
        hashedPW: hashedPW,
        email: email,
        username: username,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <StarMap />
      <div className="signUpLogoWrapper">
        <img src={Main_Logo} />
      </div>
      <div className="signUpWrapper">
        <div className="signUpSection">
          <form>
            <div className="signUp">
              <SignUpHeader text={"회원가입"} />
              <IdInput
                value={userID}
                onChange={(e) => {
                  setuserID(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <PwInput
                value={hashedPW}
                onChange={(e) => {
                  setPW(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <NameInput
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <EmailInput
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <Button onClick={handleForm} text={"회원가입"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
