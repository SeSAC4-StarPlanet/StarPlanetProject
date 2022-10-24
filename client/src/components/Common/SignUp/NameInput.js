import React, { useState } from "react";

const NameInput = () => {
  const [username, setusername] = useState("");

  const handlename = (e) => {
    setusername(e.target.value);
  };

  return (
    <>
      <div className="signUpInputContainer">
        <div className="signUpInputTitle">Name</div>
        <input
          type="text"
          className="signUpInput"
          placeholder={"홍길동"}
          onChange={handlename}
          value={username}
        ></input>
      </div>
      <div>
        <div className="errorMessageWrap">{""}</div>
      </div>
    </>
  );
};

export default NameInput;
