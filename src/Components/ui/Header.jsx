import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "../common/Button";
import AdbIcon from "@mui/icons-material/Adb";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            <Link to="/">Todo-Js</Link>
          </Typography>
          <Button
            onClick={() => navigate("/login")}
            color="inherit"
            children="Login"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
