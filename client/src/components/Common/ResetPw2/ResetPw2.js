import React, { useState } from "react";
import Button from "../SignUp/Button";
import PwInput from "../SignUp/PwInput";
import axios from "axios";

const ResetPw2 = () => {
  const [hashedPW, setPW] = useState("");
  const ResetPWBtn = () => {
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
    <div className="ResetPw2Wrapper">
      <div className="ResetPw2Section">
        <div className="ResetPw2HeaderSection">
          <div className="ResetPw2Header">비밀번호 재설정</div>
        </div>
        <div className="ResetPw2Text">새로운 비밀번호를 입력해주세요.</div>
        <div className="ResetPw2Text"></div>
        <PwInput
          onChange={(e) => {
            setPW(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Button text={"비밀번호 재설정"} onClick={ResetPWBtn} />
      </div>
    </div>
  );
};

export default ResetPw2;
