import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Forget = () => {
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
            Forget Password
          </Typography>
          <Box sx={{ width: 500 }}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              id="fullWidth"
              sx={{ marginBottom: "2rem" }}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link
                to="/login"
                style={{ textDecoration: "none", marginBottom: "1rem" }}
              >
                login
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", marginBottom: "1rem" }}
              >
                register
              </Link>
            </Box>
            <Button variant="contained" color="primary" fullWidth>
              Get Link
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Forget;
