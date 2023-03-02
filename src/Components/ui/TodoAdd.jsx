import React from "react";
import { Box } from "@mui/material";
import Search from "./Search";
import ListButtons from "./ListButtons";

const TodoAdd = () => {
  const [value, setValue] = React.useState("");

  const handleChangeValue = (text) => {
    setValue(text);
  };

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
      <Search value={value} onChangeValue={handleChangeValue} />
      <ListButtons setValue={setValue} value={value} />
    </Box>
  );
};

export default TodoAdd;
