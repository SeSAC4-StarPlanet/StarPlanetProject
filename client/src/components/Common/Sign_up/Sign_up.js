import "./Sign_up.scss";
import Sign_up_input from "./Sign_up_input/Sign_up_input";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";
import Sign_up_header from "./Sign_up_header/Sign_up_header";
import Button from "../../LandingPage/Button/Button";
import "../Sign_in/Sign_in.scss";

function Sign_up() {
  return (
    <div className="Sign_up_wrapper">
      <div className="Sign_up_section">
        <div className="Sign_up">
          <Sign_up_header text={"회원가입"} />
          <Sign_up_input text={"ID"} />
          <Sign_up_input text={"PW"} />
          <Sign_up_input text={"NAME"} />
          <Sign_up_input text={"E-mail"} />
          <Sign_up_input text={"Tel"} />
          <Sign_up_input text={"NickName"} />
          <div className="Sign_in_button_box">
            <Button text={"회원가입"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
