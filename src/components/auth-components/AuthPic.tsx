import { Box } from "@mui/material";
import React from "react";
import AuthLogo from "./AuthLogo";
import AuthImg from "./AuthImg";

const AuthPic = () => {
  return (
    <Box
      component="section"
      sx={{ position: "relative", width: "100%", height: "100%" }}
    >
      <AuthImg
        src="/auth-img/ce147d8554c2cda7530244569e9d8515.jpg"
        alt="auth-background"
      />
      <Box
        sx={{
          margin:"10px",
          position: "absolute",
          borderRadius: "100%",
          overflow:"hidden",
          top:"0",
          left:"0"
        }}
        >
        <AuthLogo src="/nest-logo/nest-logo.webp" alt="nest-logo" />
        </Box>
    </Box>
  );
};

export default AuthPic;
