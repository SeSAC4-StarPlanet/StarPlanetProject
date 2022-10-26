import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function MakeMember() {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={member}
        sx={{ width: 500 }}
        renderInput={(params) => <TextField {...params} label="멤버추가" />}
      />
    </div>
  );
}

const member = [
  { label: "송진세", year: 2008 },
  { label: "정예현", year: 1957 },
  { label: "염시온", year: 1993 },
];
