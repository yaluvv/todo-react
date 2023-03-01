import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItem = ({ content, created_at, checked }) => {
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
      <Checkbox checked={checked} />
      <InputBase
        disabled
        type="text"
        sx={{ ml: 1, flex: 1, borderBottom: "3px dashed grey" }}
        placeholder={content}
      />
      <Typography variant="p" component="span">
        {created_at}
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton color="primary" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton color="error" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ListItem;
