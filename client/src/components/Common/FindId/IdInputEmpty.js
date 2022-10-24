import React, { useState } from "react";

const User = {
  id: "sesac",
  email: "test@example.com",
  pw: "test2323@@@",
};

const SignUpInput = () => {
  const [userID, setUser_id] = useState("");
  const [idValid, setIdValid] = useState(false);

  const handleId = (e) => {
    setUser_id(e.target.value);
    const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{3,20}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  return (
    <>
      <div className="signUpInputContainer">
        <div className="signUpInputTitle">ID</div>
        <input
          placeholder="아이디를 입력해주세요"
          value={userID}
          onChange={handleId}
          className="signUpInput"
          type="text"
        ></input>
      </div>
      <div>
        {userID != User.id ? (
          <div className="errorMessageWrap">{""}</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default SignUpInput;
