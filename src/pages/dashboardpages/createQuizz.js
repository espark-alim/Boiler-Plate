import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import SMInput from "../../components/SMInput";
import SMIconButton from "../../components/SMIconButton";
import AddIcon from "@mui/icons-material/Add";
import SMButton from "../../components/SMButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CreateQuiz() {
  const [quizData, setQuizData] = useState({
    quizName: "",
    quizDorarion: "",
    quizSecretKey: "",
  });
  const navigate = useNavigate();
  const handleSave = () => {
    navigate(`/dashboard/quiz`);
  };
  const handleQuizName = (key, val) => {
    setQuizData((prevModel) => ({
      ...prevModel,
      [key]: val,
    }));
    console.log(quizData);
  };
  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              px: 2,
            }}
          >
            <Typography textAlign="left" fontWeight={"bold"} variant="h5">
              QUIZ App Admin
            </Typography>
            <SMButton
              label={"Save"}
              variant={"contained"}
              style={{ px: 8, py: 1.8 }}
              onClick={() => handleSave()}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Quiz Name"}
              name={"Quiz Name"}
              onChange={(e) => handleQuizName("quizName", e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Quiz Duration in min"}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Secret Key"}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <SMIconButton
              label={"Lock Quiz"}
              variant={"contained"}
              style={{
                width: "100%",
                py: 1.8,
                textAlign: "flex-start",
                display: "flex",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Description"}
            />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <SMIconButton
              label={"Lock Quiz"}
              variant={"contained"}
              style={{
                width: "100%",
                py: 1.8,
                textAlign: "flex-start",
                display: "flex",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Question"}
            />
          </Item>
        </Grid>
        <Grid item xs={11}>
          <Item>
            <SMInput type={"text"} sx={{ display: "flex" }} label={"Option"} />
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item>
            <SMIconButton
              label={<AddIcon />}
              variant={"contained"}
              style={{ py: 2, width: "100%" }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
