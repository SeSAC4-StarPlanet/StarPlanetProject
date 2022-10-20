import "./SignUp.scss";
import SignUpInput from "./SignUpInput/SignUpInput";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";
import SignUpHeader from "./SignUpHeader/SignUpHeader";
import Button from "../../LandingPage/Button/Button";

function SignUp() {
  return (
    <div className="signUpWrapper">
      <div className="signUpSection">
        <div className="signUp">
          <SignUpHeader text={"회원가입"} />
          <SignUpInput />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
