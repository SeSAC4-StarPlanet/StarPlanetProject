import React from "react";
import TextField from "@mui/material/TextField";

export default function MakePlanetInput() {
  return (
    <div className="makePlanetInputContainer">
      <TextField
        id="standard-search"
        label="행성이름을 입력해주세요"
        type="text"
        variant="standard"
        style={{
          width: "100%",
          marginBottom: 50,
        }}
      />
    </div>
  );
}
