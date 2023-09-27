import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../config/fbConfig";

export default function Signup() {
  const [model, setModel] = useState({});
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const signupUser = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, model.email, model.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user == userCredential.user) {
          navigate(`/profile/${model.email}`, { state: model });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
              Signup
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
              onClick={(e) => signupUser(e)}
              fullWidth={true}
              variant="contained"
            >
              signup
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
