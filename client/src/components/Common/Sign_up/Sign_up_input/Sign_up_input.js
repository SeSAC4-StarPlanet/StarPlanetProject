import React from "react";
import "./Sign_up_input.scss";

const Sign_up_input = ({ text }) => {
  return (
    <div className="Sign_up_input_section">
      <div className="Sign_up_input_container">
        <div className="Sign_up_input_logo" value={text}>
          {text}
        </div>
        <input type="text" className="Sign_up_input"></input>
      </div>
    </div>
  );
};

export default Sign_up_input;
