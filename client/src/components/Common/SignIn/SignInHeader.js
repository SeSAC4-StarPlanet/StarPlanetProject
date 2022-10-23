import React from "react";

const SignInHeader = ({ text }) => {
  return (
    <div className="signInHeaderSection">
      <div className="signInHeader" value={text}>
        {text}
      </div>
    </div>
  );
};

export default SignInHeader;
