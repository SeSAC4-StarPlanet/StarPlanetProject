import React from "react";
import "./Sign_up_header.scss";

const Sign_up_header = ({ text }) => {
  return (
    <div className="Sign_up_header_section">
      <div className="Sign_up_header" value={text}>
        {text}
      </div>
    </div>
  );
};

export default Sign_up_header;
