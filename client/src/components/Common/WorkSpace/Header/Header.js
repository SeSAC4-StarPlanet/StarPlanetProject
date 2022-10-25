import React from "react";
import "./header.scss";
import { ReactComponent as HeaderLogo } from "../../../../assets/img/WorkSpace/Header/WorkSpaceHeaderLogo.svg";
const Header = () => {
  return (
    <div className="workspaceHeaderWrapper">
      <div className="LogoWrapper">
        <HeaderLogo />
      </div>
      <div className="OptionWrapper">
        <ul>
          <li className="myplanet">
            <a href="#">My planent</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">+pro</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
