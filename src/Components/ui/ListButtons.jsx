import React from "react";
import Stack from "@mui/material/Stack";

import Button from "../common/Button";

const ListButtons = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" children="ADD TODO" />
      <Button color="error" variant="contained" children="REMOVE SELECTED" />
    </Stack>
  );
};

export default ListButtons;
