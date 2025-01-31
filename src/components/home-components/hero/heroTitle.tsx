import { Box, Typography } from "@mui/material";
import React from "react";

const HeroTitle = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography component="h1" sx={{ fontWeight: "500", fontSize: "72px" }}>
        زندگی مدرن با انتخابی هوشمندانه
      </Typography>
    </Box>
  );
};

export default HeroTitle;
