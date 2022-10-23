import React, { useEffect, useState } from "react";

const User = {
  id: "sesac",
  email: "test@example.com",
  pw: "test2323@@@",
};

const EmailInput = () => {
  const [user_id, setUser_id] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [telValid, setTelValid] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (pw !== pwCheck) {
      return setPwError(true);
    }

    console.log({
      user_id,
      pw,
      pwCheck,
      email,
      tel,
    });
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangePwChk = (e) => {
    setPwError(e.target.value !== pw);
    setPwCheck(e.target.value);
  };

  useEffect(() => {
    if (emailValid && pwValid && idValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid, idValid]);

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
          <div className="errorMessageWrap">올바른 이메일을 입력해주세요.</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default EmailInput;
