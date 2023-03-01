import React from "react";
import Box from "@mui/material/Box";
import TodoAdd from "./TodoAdd";
import ListItems from "./ListItems";

const TodoList = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fcfcfc",
        boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
      }}
    >
      <TodoAdd />
      <ListItems data={data} />
    </Box>
  );
};

export default TodoList;
