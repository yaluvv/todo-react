import React from "react";
import { Box } from "@mui/material";
import TodoAdd from "./TodoAdd";
import ListItems from "./ListItems";
import { useTodoStore } from "../../store/store";
import SkeletonItem from "./SkeletonItem";

const TodoList = () => {
  const loading = useTodoStore((state) => state.loading);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fcfcfc",
        boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
      }}
    >
      <TodoAdd />
      {loading && <SkeletonItem />}
      <ListItems />
    </Box>
  );
};

export default TodoList;
