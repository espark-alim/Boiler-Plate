import * as React from "react";
import { Input, InputBase, TextField } from "@mui/material";

export default function SMInput({
  label,
  variant,
  placeholder,
  onChange,
  inputstyle,
  labelstyle,
  type,
}) {
  // const defaultInputStyle = {
  //   border: "1px solid gray",
  //   borderRadius: "7px 7px 7px 7px",
  //   padding: "5px 8px",
  //   margin: 1,
  // };
  const defaultLabelStyle = {
    color: "black",
    fontSize: "20px",
    fontWeight: 500,
    margin: "5px  5px",
  };
  return (
    <>
      <label style={labelstyle ? labelstyle : defaultLabelStyle}>{label}</label>
      <br />
      <TextField
        placeholder={placeholder}
        onChange={onChange}
        sx={inputstyle ? inputstyle : null}
        variant={variant}
        type={type}
        label={label}
      />
    </>
  );
}
