import { Box } from "@mui/material";
import React from "react";

const Container = ({ children }: Readonly<{ children: React.ReactElement }>) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      maxWidth="lg"
    >
      {children}
    </Box>
  );
};

export default Container;
