import React, { useEffect, useState } from "react";

const User = {
  id: "sesac",
  email: "test@example.com",
  pw: "test2323@@@",
};

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <>
      <div className="signUpInputContainer">
        <div className="signUpInputTitle">E-mail</div>
        <input
          type="text"
          placeholder="test@email.com"
          value={email}
          onChange={handleEmail}
          className="signUpInput"
        ></input>
      </div>
      <div>
        {!emailValid && email.length > 0 ? (
          <div className="errorMessageWrap">{""}</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default EmailInput;
