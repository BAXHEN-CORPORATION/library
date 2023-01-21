import React from "react";
import { styled } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Span = styled((props: TypographyProps) => (
  <Typography component="span" {...props} />
))(({ theme }) => ({
  color: theme.palette.primary.main,
  "&::after": {
    content: "''",
    position: "absolute",
    height: "100%",
    width: "100%",
    borderLeft: "2px solid currentColor",
    color: theme.palette.primary.main,
  },
}));
