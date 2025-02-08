import Footer from "@/components/home-components/footer/footer";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import Navbar from "@/components/home-components/navbar/navbar";
import ProductCard from "@/components/product-components/product-card/productCard";
import ProductPage from "@/components/product-components/product-page/productPage";
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
          marginBottom: "50px",
        }}
      >
        <HeroSection />
        <ProductCard />
        <ProductPage />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
