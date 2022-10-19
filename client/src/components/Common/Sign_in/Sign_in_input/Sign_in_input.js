import React, { useEffect, useRef, useState } from "react";
import "./Sign_in_input.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Sign_in_input = ({ type, text, placeholder, Btn }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const handleClick = () => {
    ref1.current.value = "";
    ref2.current.hidden = true;
  };
  const changeInput = (e) => {
    if (e.target.value != "") ref2.current.hidden = false;
    else ref2.current.hidden = true;
  };

  return (
    <div className="input_section">
      <div className="input_container">
        <div className="input_icon" value={text}>
          {text}
        </div>
        <input
          type={type}
          className="Input"
          ref={ref1}
          defaultValue=""
          onChange={changeInput}
          placeholder={placeholder}
        ></input>
        <button
          ref={ref2}
          onClick={() => {
            handleClick();
          }}
          className="input_icon"
          hidden
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
};

export default Sign_in_input;
