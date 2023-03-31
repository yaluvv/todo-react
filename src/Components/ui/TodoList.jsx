import React from "react";
import { Box } from "@mui/material";
import TodoAdd from "./TodoAdd";
import ListItems from "./ListItems";
import { useTodoStore } from "../../store/todo-store";
import { Typography } from "@mui/material";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const loading = useTodoStore((state) => state.loading);
  const error = useTodoStore((state) => state.error);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fcfcfc",
        boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
      }}
    >
      <TodoAdd />
      {loading && (
        <Typography variant="h4" component={"h4"} textAlign="center">
          Loading...
        </Typography>
      )}
      {error && (
        <Typography variant="h4" component={"h4"} textAlign="center">
          {error}
        </Typography>
      )}
      {!todos || (todos.length && !loading < 1) ? (
        <Typography variant="h4" component={"h4"} textAlign="center">
          Empty items
        </Typography>
      ) : (
        <ListItems data={todos} />
      )}
    </Box>
  );
};

export default TodoList;
