import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CreateQuiz() {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item sx={{ justifyContent: "space-between", display: "flex", p: 2 }}>
            <Typography textAlign="left" fontWeight={"bold"} variant="h5">
              QUIZ App Admin
            </Typography>

            <Button
              sx={{
                backgroundColor: "#01398C;",
                px: 4,
                letterSpacing: 2,
                color: "#FFF",
                fontSize: 15,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                borderRadius: 0,
              }}
              variant="contained"
            >
              Save
            </Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={10}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
