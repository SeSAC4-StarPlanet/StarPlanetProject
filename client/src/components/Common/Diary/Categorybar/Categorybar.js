import React from "react";
import "./Categorybar.scss";

const Categorybar = ({ icon, category }) => {
  return (
    <div className="Category">
      <div className="Category_icon">{icon}</div>
      <div className="Category_title">{category}</div>
    </div>
  );
};

export default Categorybar;
