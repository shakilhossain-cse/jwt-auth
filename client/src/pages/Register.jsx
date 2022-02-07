import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const submitHandeler = () => {};
  return (
    <div>
      <form onSubmit={submitHandeler}>
        <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Typography variant="h3" gutterBottom component="div">
            Register
          </Typography>
          <Box sx={{ width: 500 }}>
          <TextField
              fullWidth
              label="Name"
              id="fullWidth"
              sx={{ marginBottom: "2rem" }}
            />
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              sx={{ marginBottom: "2rem" }}
            />
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ marginBottom: "1rem" }}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link
                to="/login"
                style={{ textDecoration: "none", marginBottom: "1rem" }}
              >
                login
              </Link>
              <Link
                to="/forgetpassword"
                style={{ textDecoration: "none", marginBottom: "1rem" }}
              >
                forget Password
              </Link>
            </Box>
            <Button variant="contained" color="primary" fullWidth>
             Register
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Register;
