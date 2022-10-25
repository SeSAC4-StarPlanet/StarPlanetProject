import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const SignInInput = ({ type, text, placeholder, onChange, value }) => {
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
    <div className="inputSection">
      <div className="inputContainer">
        <div className="inputIcon" value={text}>
          {text}
        </div>
        <input
          type={type}
          className="Input"
          ref={ref1}
          onChange={(e) => {
            changeInput(e);
            onChange(e);
          }}
          value={value}
          placeholder={placeholder}
        ></input>
        <button
          ref={ref2}
          onClick={() => {
            handleClick();
          }}
          className="inputIcon"
          hidden
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
};

export default SignInInput;
