import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../../../assets/img/Dairy/Header/headerLogo.svg";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SearchBar from "../SearchBar/SearchBar";
import Avatar from "@mui/material/Avatar";
import { FaRegComment, FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="dairyHeaderWrapper">
      <div className="dairyHeaderContainer">
        <div className="dairyHeaderLogoContainer">
          <Logo />
        </div>
        <div className="dairyHeaderSearchbarContainer">
          <SearchBar />
        </div>
        <div className="dairyHeaderBtnContainer">
          <IconButton className="btn">
            <FaRegComment />
          </IconButton>
          <IconButton className="btn">
            <FaRegBell />
          </IconButton>
          <IconButton className="btn">
            <Avatar />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
