import React from "react";

const signIn_Button = ({ text, mode, value, onclick }) => {
  return (
    <div className="signInBtnWrapper">
      <button>{text}</button>
    </div>
  );
};

export default signIn_Button;
