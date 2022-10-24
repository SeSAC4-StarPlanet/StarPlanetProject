import React, { useState } from "react";

const SignUpInput = () => {
  const [userID, setuserID] = useState("");
  const [idValid, setIdValid] = useState(false);

  const handleId = (e) => {
    setuserID(e.target.value);
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
          placeholder="사용하실 아이디를 입력해주세요"
          value={userID}
          onChange={handleId}
          className="signUpInput"
          type="text"
        ></input>
      </div>
      <div>
        {userID ? (
          <div className="errorMessageWrap">{""}</div>
        ) : (
          <div className="errorMessageWrap">
            중복된 아이디 입니다. 다른 아이디를 입력해주세요.
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpInput;
