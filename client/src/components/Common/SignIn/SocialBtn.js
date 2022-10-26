import React from "react";
import "./SocialBtn.scss";

export default function SocialBtn({ src }) {
  return (
    <div className="btnBox">
      <img src={src}></img>
    </div>
  );
}
