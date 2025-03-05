"use client";

import { BrandsList } from "@/components/home-components/brands/BrandsList";
import CategoriesList from "@/components/home-components/categories/CategoriesList";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import HomeProducts from "@/components/home-components/HomeProducts";
import PaginationUI from "@/components/home-components/Pagination";
import { useUserProductsQuery } from "@/api/client-api/user/products";
import { ServerPageProps } from "@/type/serverTypes";
import { Box } from "@mui/material";
import { useSearch } from "@/providers/SearchProvider";

interface IHomePageProps {
  searchParams: ServerPageProps;
}

export default function HomePage({ searchParams }: IHomePageProps) {
  const { searchQuery } = useSearch();

  const queryParams = {
    page: searchParams?.page,
    pageSize: searchParams?.pageSize,
    q: searchQuery,
  };

  const { data: products } = useUserProductsQuery(queryParams);

  const count = products?.total || 0;

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
        <HomeProducts params={searchParams} />
        <PaginationUI count={count} />
      </Box>
    </>
  );
}
