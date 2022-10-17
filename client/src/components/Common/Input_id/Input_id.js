import React from "react";
import "./Input_id.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Input_id() {
  return (
    <div className="input_id_section">
      <div className="input_id_container">
        <div className="input_id_icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input type="text" className="Input_id" placeholder="아이디"></input>
      </div>
    </div>
  );
}

export default Input_id;
