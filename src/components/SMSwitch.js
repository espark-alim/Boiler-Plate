import { Style } from "@mui/icons-material";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";

const SMSwitch = ({
  label,
  defaultChecked,
  size,
  disabled,
  onChange,
  Style,
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          defaultChecked={defaultChecked}
          size={size}
          disabled={disabled}
          onChange={onChange}
          sx={Style}
        />
      }
      label={label}
    />
  );
};

export default SMSwitch;
