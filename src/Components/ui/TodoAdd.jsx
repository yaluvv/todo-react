import React from "react";
import Box from "@mui/material/Box";
import Search from "./Search";
import ListButtons from "./ListButtons";

const TodoAdd = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: "1rem",
        backgroundColor: "#e8e8e8",
      }}
    >
      <Search />
      <ListButtons />
    </Box>
  );
};

export default TodoAdd;
