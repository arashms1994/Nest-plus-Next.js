import { BrandsList } from "@/components/home-components/brands/BrandsList";
import CategoriesList from "@/components/home-components/categories/CategoriesList";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import HomeProducts from "@/components/home-components/HomeProducts";
import { ServerPageProps } from "@/type/serverTypes";
import { Box } from "@mui/material";
import React from "react";

interface IHomePageProps {
  searchParams: ServerPageProps;
}

const HomePage = async ({ searchParams }: IHomePageProps) => {
  return (
    <>
      <HeroSection />
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
        <CategoriesList />
        <BrandsList />
        <HomeProducts />
      </Box>
    </>
  );
};

export default HomePage;
