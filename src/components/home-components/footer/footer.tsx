import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "black",
        textAlign: "center",
        bottom: "0",
        paddingY: "10px",
        marginTop:"12px"
      }}
    >
      <Typography
        sx={{ fontSize: "12", fontWeight: "400", color: "white" }}
        component="p"
      >
        تمامی حقوق مادی و معنوی این سایت محفوظ میباشد.
      </Typography>
    </Box>
  );
};

export default Footer;
