import Footer from "@/components/home-components/footer/footer";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import Navbar from "@/components/home-components/navbar/navbar";
import { Box } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
    <Navbar />
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 1120,
          marginBottom:"50px"
        }}
      >
        <HeroSection />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
