import React from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  getRedirectResult,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../config/fbConfig";

export default function Login() {
  const auth = getAuth(app);
  const [model, setModel] = useState({});
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const loginUser = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, model.email, model.password)
      .then((userCredential) => {
        // login
        const user = userCredential.user;
        if (user == userCredential.user) {
          navigate(`/profile/${model.email}`, { state: model });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex bg-secondary justify-content-center align-items-center"
      >
        <Paper className="p-3">
          <Box className="p-3">
            <Typography className="text-center" variant="h5">
              Login
            </Typography>
          </Box>
          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("email", e.target.value)}
              variant="standard"
              type="email"
              label="Email"
            />
          </Box>
          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("password", e.target.value)}
              variant="standard"
              type="password"
              label="Password"
            />
          </Box>
          <Box className="p-3">
            <Button
              onClick={(e) => loginUser(e)}
              fullWidth={true}
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
