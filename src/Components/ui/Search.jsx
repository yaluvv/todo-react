import React from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ value, onChangeValue }) => {
  return (
    <>
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <InputBase
        type="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter your text"
        inputProps={{ "aria-label": "Enter your text" }}
        onChange={(evt) => onChangeValue(evt.target.value)}
        value={value}
      />
    </>
  );
};

export default Search;
