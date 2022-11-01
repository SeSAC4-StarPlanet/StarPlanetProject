import React from "react";
import "./header.scss";
import { ReactComponent as HeaderLogo } from "../../../../assets/img/WorkSpace/Header/WorkSpaceHeaderLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="workspaceHeaderWrapper">
      <div className="LogoWrapper">
        <HeaderLogo onClick={() => navigate("/workspace/main")} />
      </div>
      <div className="OptionWrapper">
        <ul>
          <li className="myplanet">
            <a className="myplanetBtn" href="/workspace/main">
              My planent
            </a>
          </li>
          <li>
            <a className="aboutusBtn" href="/aboutus">
              About us
            </a>
          </li>
          <li>
            <a className="contact" href="/contact">
              contact
            </a>
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
