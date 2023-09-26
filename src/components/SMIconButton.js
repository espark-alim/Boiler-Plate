import * as React from "react";
import Button from "@mui/material/Button";

export default function SMIconButton({
  label,
  variant,
  startIcon,
  endIcon,
  color,
  onClick,
  style,
}) {
  return label || startIcon || endIcon ? (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
      onClick={onClick}
      sx={style}
    >
      {label}
    </Button>
  ) : null;
}
