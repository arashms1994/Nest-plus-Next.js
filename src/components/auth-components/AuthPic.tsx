import { Box } from "@mui/material";
import React from "react";
import AuthLogo from "./AuthLogo";
import AuthImg from "./AuthImg";

const AuthPic = () => {
  return (
    <Box component="section" sx={{ position: "relative", width:"100%", height:"100%" }}>
      <AuthLogo src="/src/app/favicon.ico" alt="nest-logo" />
      <AuthImg
        src="/auth-img/ce147d8554c2cda7530244569e9d8515.jpg"
        alt="auth-background"
      />
    </Box>
  );
};

export default AuthPic;
