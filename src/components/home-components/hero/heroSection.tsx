import { Stack } from "@mui/material";
import React from "react";
import HeroTitle from "./heroTitle";
import ImageSlider from "./ImageSlider";

export const HeroSection = () => {
  return (
    <Stack
      sx={{
        maxWidth: 1120,
        width: "100%",
        margin: "0 auto",
        marginTop: "80px",
      }}
      direction="column"
      gap={4}
    >
      <ImageSlider />
      <HeroTitle />
    </Stack>
  );
};
