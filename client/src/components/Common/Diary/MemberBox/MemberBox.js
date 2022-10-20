import React, { useState } from "react";
import "./memberBox.scss";

// MUI 라이브러리
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// 내부 리스트 선언 컴포넌트
import Collapse from "@mui/material/Collapse";

// 화살표
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// 아이콘
import Avatar from "@mui/material/Avatar";

const MemberBox = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      className="memberbox_wrapper"
      sx={{
        width: "100%",
        maxHeight: "232px",
        overflow: "auto",
        position: "relative",
        paddingTop: "0",
      }}
    >
      <ListItemButton
        sx={{
          position: "fixed",
          width: "100%",
          maxWidth: "200px",
          zIndex: "3",
          backgroundColor: "#fff",
          padding: "10px 16px",
          marginTop: "-3px",
          "&:hover": {
            backgroundColor: "#fff",
            opacity: 1,
          },
        }}
        onClick={handleClick}
      >
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        <ListItemText primary={"멤버"}></ListItemText>
      </ListItemButton>
      <div className="memberbox_space" />
      <Collapse
        // sx={{ marginTop: "35px" }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List sx={{ marginTop: "5px" }} component="div" disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"시온"}></ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"진세"}></ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"예현"}></ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"지수"}></ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"지수"}></ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"지수"}></ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"지수"}></ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"지수"}></ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default MemberBox;
