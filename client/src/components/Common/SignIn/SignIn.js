import "./SignIn.scss";
import Button from "../../LandingPage/Button/Button";
import Find_txt from "./Find/Find_txt";
import SignInInput from "./SignInInput/SignInInput";
import SignInHeader from "./SignInHeader/SignInHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  return (
    <div className="signInWrapper">
      <div className="signInSection">
        <div className="signIn">
          <SignInHeader text={"로그인"} />
          <SignInInput
            type={"text"}
            text={<FontAwesomeIcon icon={faUser} />}
            placeholder={"아이디"}
          />
          <SignInInput
            type={"password"}
            text={<FontAwesomeIcon icon={faKey} />}
            placeholder={"비밀번호"}
          />
          <span className="signInError"></span>
          <div className="signInButtonBox">
            <Button className="signInButton" text={"로그인"} />
          </div>
          <Find_txt />
        </div>
      </div>
      {/* -----------------로그인input----------------- */}

      <div className="signInBottom">
        <h5>STARPL에 처음이신가요?</h5>
        <a>회원가입</a>
      </div>

      {/* -----------------회원가입안내글----------------- */}
    </div>
  );
};

export default SignIn;
