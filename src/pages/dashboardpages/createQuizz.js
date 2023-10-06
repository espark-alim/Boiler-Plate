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
import { fbAdd, fbGet } from "../../config/fbMethods";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CreateQuiz() {
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState("");
  const [data, setData] = useState("");
  const [quizData, setQuizData] = useState({
    quizName: "",
    quizDuration: "",
    quizSecretKey: "",
    quizDescription: "",
    quizQuestion: "",
    correctOption: "",
    quizOption: [],
  });

  const handleOption = (val) => {
    setCurrentOption(val);
    console.log(currentOption);
  };

  const navigate = useNavigate();

  const handleAdd = () => {
    options.push(currentOption);
    setOptions([...options]);
    setCurrentOption("");
    setQuizData((prevData) => ({
      ...prevData,
      quizOption: options,
    }));
  };
  console.log(quizData);

  const handleSave = () => {
    fbAdd("QuizQuestions", quizData)
      .then((res) => {
        console.log(res);
        setQuizData({});
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate(`/dashboard/quiz`);
  };

  const handleChange = (key, val) => {
    setQuizData((prevModel) => ({
      ...prevModel,
      [key]: val,
    }));
    console.log(quizData);
  };
  const handleGet = () => {
    fbGet("QuizQuestions", quizData)
      .then((res) => {
        if (res) {
          console.log(res);
          setData(res);
        } else {
          console.log("No data found.");
          setData(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dataObject = data;
  const dataArray = Object.keys(dataObject).map((key) => ({
    id: key,
    ...dataObject[key],
  }));
  console.log(data, "====> data");
  console.log(dataArray, "====> dataArray");
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
              onChange={(e) => handleChange("quizName", e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Quiz Duration in min"}
              onChange={(e) => handleChange("quizDuration", e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Secret Key"}
              onChange={(e) => handleChange("quizSecretKey", e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Description"}
              onChange={(e) => handleChange("quizDescription", e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <SMIconButton
              label={"Lock Quiz"}
              variant={"contained"}
              onClick={() => handleGet()}
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
              onChange={(e) => handleChange("quizQuestion", e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Option"}
              // name={"options"}
              onChange={(e) => handleOption(e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <SMInput
              type={"text"}
              sx={{ display: "flex" }}
              label={"Currect Option"}
              // name={"options"}
              onChange={(e) => handleChange("correctOption", e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item>
            <SMIconButton
              label={<AddIcon />}
              variant={"contained"}
              style={{ py: 2, width: "100%" }}
              onClick={() => handleAdd()}
            />
          </Item>
        </Grid>
        {quizData?.quizOption?.map((item, i) => (
          <Grid key={i} item xs={6}>
            <Item>
              <Typography textAlign="left" fontWeight={"semibold"} variant="h5">
                {item}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Typography>
        {       : <p>No data available.</p>}
      </Typography>
    </Box>
  );
}
