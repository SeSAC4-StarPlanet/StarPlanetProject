import React from "react";
import "./main.scss";

const Main = () => {
  return (
    <div className="PlanetSelector">
      <div id="circle-orbit-container">
        <div id="inner-orbit">
          <div class="inner-orbit-cirlces" />
        </div>
      </div>
      <div className="planet" />
    </div>
  );
};

export default Main;
