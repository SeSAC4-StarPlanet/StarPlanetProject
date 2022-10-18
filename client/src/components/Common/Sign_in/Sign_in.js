import "./Sign_in.scss";
import Button from "../../LandingPage/Button/Button";
import Find_txt from "./Find/Find_txt";
import Sign_in_input from "../Sign_in/Sign_in_input/Sign_in_input";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";
import Sign_in_header from "./Sign_in_header/Sign_in_header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

function Sign_in() {
  return (
    <div className="Sign_in_wrapper">
      <div className="Sign_in_logo_wrapper">
        <img src={Main_Logo} />
      </div>
      {/*-----------------로고-----------------*/}

      <div className="Sign_in_section">
        <div className="Sign_in">
          <Sign_in_header text={"로그인"} />
          <Sign_in_input
            text={<FontAwesomeIcon icon={faUser} />}
            placeholder={"아이디"}
          />
          <Sign_in_input
            text={<FontAwesomeIcon icon={faKey} />}
            placeholder={"비밀번호"}
          />
          <span className="Sign_in_error"></span>
          <div className="Sign_in_button_box">
            <Button className="Sign_in_button" text={"로그인"} />
          </div>
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
