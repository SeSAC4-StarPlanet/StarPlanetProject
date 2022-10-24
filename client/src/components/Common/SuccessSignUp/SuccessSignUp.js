import SuccessSignUpBtn from "./SuccessSignUpBtn";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";

const SuccessSignUp = () => {
  return (
    <div className="successSignUpWrapper">
      <div className="successSignUpSection">
        <div className="successSignUpTextBox">
          <div className="successSignupText">스타플 회원가입을</div>
          <div className="successSignupText">진심으로 축하드립니다!</div>
          <div className="successSignupText">
            스타플에 소중한 추억을 저장하세요.
          </div>
          <div className="successSignUpImg">
            <img src={Main_Logo} />
          </div>
          <h3>로그인 후 서비스를 이용하세요.</h3>
          <SuccessSignUpBtn />
        </div>
      </div>
    </div>
  );
};

export default SuccessSignUp;
