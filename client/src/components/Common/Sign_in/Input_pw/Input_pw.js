import "./Input_pw.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

function Input_pw() {
  return (
    <div className="input_pw_section">
      <div className="input_pw_container">
        <div className="input_pw_icon">
          <FontAwesomeIcon icon={faKey} />
        </div>
        <input type="text" className="Input_pw" placeholder="비밀번호"></input>
      </div>
    </div>
  );
}

export default Input_pw;
