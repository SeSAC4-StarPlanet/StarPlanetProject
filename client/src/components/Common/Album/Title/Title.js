import React from "react";
import "./title.scss";

const Title = ({ title, count }) => {
  return (
    <div>
      <div className="albumTitleWrapper">
        <div className="albumTitle">
          {title}
        </div>
        <div className="albumCount">
          {count}
        </div>
<div className="albumTitleBtn">
    
</div>
      </div>
    </div>
  );
};

export default Title;
