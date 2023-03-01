import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <InputBase
        type="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter your text"
        inputProps={{ "aria-label": "Enter your text" }}
      />
    </>
  );
};

export default Search;
