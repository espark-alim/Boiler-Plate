import * as React from "react";
import Button from "@mui/material/Button";

export default function SMButton({ label, variant, color, onClick, style }) {
  const defaultStyle = { margin: "12px 0" };
  return label ? (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={style ? style : defaultStyle}
    >
      {label}
    </Button>
  ) : null;
}
