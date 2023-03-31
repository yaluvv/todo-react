import React from "react";
import Stack from "@mui/material/Stack";
import { useTodoStore } from "../../store/todo-store";

import { Button } from "@mui/material";

const ListButtons = ({ setValue, value }) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeCheckedTodos = useTodoStore((state) => state.removeCheckedTodos);
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
        variant="contained"
        children="ADD TODO"
      />
      <Button
        onClick={removeCheckedTodos}
        color="error"
        variant="contained"
        children="REMOVE SELECTED"
      />
    </Stack>
  );
};

export default ListButtons;
