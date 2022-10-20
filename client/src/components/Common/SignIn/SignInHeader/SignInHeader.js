import React from "react";
import "./SignInHeader.scss";

const SignUpHeader = ({ text }) => {
  return (
    <div className="signInHeaderSection">
      <div className="signInHeader" value={text}>
        {text}
      </div>
    </div>
  );
};

export default SignUpHeader;
