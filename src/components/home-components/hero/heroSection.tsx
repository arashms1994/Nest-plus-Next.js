import { Stack } from "@mui/material";
import React from "react";
import HeroImg from "./heroImages";
import HeroTitle from "./heroTitle";

export const HeroSection = () => {
  return (
    <Stack
      sx={{
        maxWidth: 1120,
        width: "100%",
        margin: "0 auto",
        marginTop:"80px"
      }}
      direction="column"
      gap={4}
    >
      <HeroImg
        src="/hero-img/0db6128ab1993d65eae0e96498fbd94e.jpg"
        alt="Hero-Image"
      />
      <HeroTitle />
    </Stack>
  );
};
