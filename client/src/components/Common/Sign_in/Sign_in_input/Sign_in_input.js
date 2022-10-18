import React from "react";
import "./Sign_in_input.scss";

const Sign_in_input = ({ text, placeholder }) => {
  return (
    <div className="input_section">
      <div className="input_container">
        <div className="input_icon" value={text}>
          {text}
        </div>
        <input type="text" className="Input" placeholder={placeholder}></input>
      </div>
    </div>
  );
};

export default Sign_in_input;
