import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonItem = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Skeleton sx={{ bgcolor: "grey.200" }} height={50} animation="wave" />
    </Box>
  );
};

export default SkeletonItem;
