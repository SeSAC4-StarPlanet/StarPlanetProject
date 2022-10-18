import "./Sign_in.scss";
import Input_id from "./Input_id/Input_id";
import Input_pw from "./Input_pw/Input_pw";
import Button from "../../LandingPage/Button/Button";
import Find_txt from "./Find/Find_txt";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";

function Sign_in() {
  return (
    <div className="Sign_in_wrapper">
      <div className="Sign_in_logo_wrapper">
        <img src={Main_Logo} />
      </div>
      {/*-----------------로고-----------------*/}

      <div className="Sign_in_section">
        <div className="Sign_in">
          <div className="Login_txt_box">
            <div className="Login_txt">로그인</div>
          </div>
          <Input_id />
          <Input_pw />
          <Button text={"로그인"} />
          <Find_txt />
        </div>
      </div>
      {/* -----------------로그인input----------------- */}

      <div className="Sign_in_bottom">
        <h5>STARPL에 처음이신가요?</h5>
        <a>회원가입</a>
      </div>
      {/* -----------------회원가입안내글----------------- */}
    </div>
  );
}

export default Sign_in;
