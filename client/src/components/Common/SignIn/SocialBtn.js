import React from "react";
import "./SocialBtn.scss";

export default function SocialBtn({ src }) {
  return (
    <div className="socialBtnBox">
      <img src={src}></img>
    </div>
  );
}
