import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const NotAuth = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h4" component="h4" textAlign="center">
        Для того, чтобы пользоваться сервисом, нужно залогиниться или
        зарегистрироваться!
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          mt: "25px",
        }}
      >
        <Button onClick={() => navigate("/signup")} variant="contained">
          Sign Up
        </Button>
        <Button onClick={() => navigate("/login")} variant="outlined">
          Login
        </Button>
      </Box>
    </>
  );
};

export default NotAuth;
