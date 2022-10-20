import React, { useEffect, useState } from "react";
import "./SignUpInput.scss";

const User = {
  id: "sesac",
  email: "test@example.com",
  pw: "test2323@@@",
};

const SignUpInput = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);
  const [email, setEmail] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    if (pw !== pwCheck) {
      return setPwError(true);
    }

    console.log({
      id,
      pw,
      pwCheck,
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

  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{3,20}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="signUpInputSection">
          <div className="signUpInputContainer">
            <div className="signUpInputTitle">ID</div>
            <input
              placeholder="사용하실 아이디를 입력해주세요"
              value={id}
              onChange={handleId}
              className="signUpInput"
              type="text"
            ></input>
          </div>
          <div>
            {!idValid && id.length > 0 ? (
              <div className="errorMessageWrap">
                중복된 아이디 입니다. 다른 아이디를 입력해주세요.
              </div>
            ) : (
              <div className="successMessageWrap">
                사용 가능한 아이디 입니다.
              </div>
            )}
          </div>
          <div className="signUpInputContainer">
            <div className="signUpInputTitle">PW</div>
            <input
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={onChangePw}
              className="signUpInput"
            ></input>
          </div>
          <div className="errorMessageWrap">
            {pwError && (
              <div className="errorMessageWrap">
                비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>
          <div className="signUpInputContainer">
            <div className="signUpInputTitle">PW Confirm</div>
            <input
              type="password"
              required
              value={pwCheck}
              onChange={onChangePwChk}
              className="signUpInput"
            ></input>
          </div>
          <div className="errorMessageWrap">
            {pwError && (
              <div className="errorMessageWrap">
                비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>
          <div className="signUpInputContainer">
            <div className="signUpInputTitle">E-mail</div>
            <input
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
              className="signUpInput"
            ></input>
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
          <div className="signUpInputContainer">
            <div className="signUpInputTitle">Tel</div>
            <input type="tel" className="signUpInput"></input>
          </div>
          <div className="signInButtonBox">
            <button className="signInButton">회원가입</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpInput;
