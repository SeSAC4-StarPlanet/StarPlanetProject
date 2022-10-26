import React, { useState } from "react";
import "./SignUpPage.scss";
import StartMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import IdInput from "../../components/Common/SignUp/IdInput";
import PwInput from "../../components/Common/SignUp/PwInput";
export default function SignUpPage2() {
  const [userID, setuserID] = useState("");

  const handleForm = () => {};
  return (
    <div>
      <StartMap />
      <div className="signUpLogoWrapper">
        <img src={Main_Logo} />
      </div>

      <PwInput
        value={userID}
        onChange={(e) => {
          setuserID(e.target.value);
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
