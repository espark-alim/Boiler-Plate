import * as React from "react";
import { TextField } from "@mui/material";

export default function SMInput({
  label,
  variant,
  name,
  placeholder,
  onChange,
  sx,
  value,
  type,
}) {
  return (
    <>
      <TextField
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        sx={sx ? sx : null}
        variant={variant}
        type={type}
        label={label}
        value={value}
      />
    </>
  );
}
