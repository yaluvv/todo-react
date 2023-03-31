import React from "react";

import {
  Box,
  Checkbox,
  InputBase,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useTodoStore } from "../../store/todo-store";

const ListItem = ({ id, content, created_at, checked }) => {
  const deleteItem = useTodoStore((state) => state.removeTodo);
  const editItem = useTodoStore((state) => state.editTodo);
  const checkTodo = useTodoStore((state) => state.checkTodo);
  const [activeItem, setActiveItem] = React.useState(null);
  const [value, searchValue] = React.useState(content);
  const someRef = React.useRef([]);
  const todos = useTodoStore((state) => state.todos);

  const handleChangeValue = (evt) => {
    searchValue(evt.target.value);
    editItem(id, evt.target.value);
  };
  const closeItem = () => setActiveItem(null);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        p: "1rem",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={() => {
          checkTodo(id);
        }}
      />
      <InputBase
        onChange={handleChangeValue}
        disabled={activeItem !== id}
        type="text"
        sx={{ ml: 1, flex: 1, borderBottom: "3px dashed grey" }}
        value={value}
      />
      <Typography variant="p" component="span">
        {created_at}
      </Typography>
      <Stack direction="row" spacing={2}>
        {!activeItem ? (
          <IconButton
            onClick={() => {
              setActiveItem(id);
            }}
            color="primary"
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
        ) : (
          <IconButton onClick={closeItem} color="success" aria-label="success">
            <DoneOutlineIcon />
          </IconButton>
        )}
        <IconButton
          onClick={() => deleteItem(id)}
          color="error"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ListItem;
