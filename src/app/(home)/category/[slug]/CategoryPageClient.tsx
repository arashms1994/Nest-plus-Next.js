// src/app/(home)/category/[slug]/CategoryPageClient.tsx
"use client";

import { useUserCategoryQuery } from "@/api/client-api/user/category";
import { useUserProductsQuery } from "@/api/client-api/user/products";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import PaginationUI from "@/components/home-components/Pagination";
import ProductCard from "@/components/product-components/product-card/productCard";
import { IProduct } from "@/type/serverTypes";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { useSearch } from "@/providers/SearchProvider";

interface CategoryPageClientProps {
  slug: string;
  searchParams?: { page?: string; pageSize?: string };
}

export default function CategoryPageClient({
  slug,
  searchParams,
}: CategoryPageClientProps) {
  const { searchQuery } = useSearch();

  const queryParams = {
    page: searchParams?.page,
    pageSize: searchParams?.pageSize,
    categorySlug: slug,
    q: searchQuery,
  };

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
    isSuccess: productsSuccess,
  } = useUserProductsQuery(queryParams);

  const {
    data: category,
    isLoading: categoryLoading,
    error: categoryError,
  } = useUserCategoryQuery(slug);

  useEffect(() => {
    if (
      categoryError ||
      (productsSuccess && (!products || products.results.length === 0))
    ) {
      notFound();
    }
  }, [categoryError, productsSuccess, products]);

  if (productsLoading || categoryLoading) return <div>در حال بارگذاری...</div>;
  if (productsError || categoryError) return <div>خطا در دریافت اطلاعات</div>;
  if (!products || !category) return null;

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
        <h1>{category.titleFa}</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {products.results.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationUI count={products.total} />
      </Box>
    </>
  );
}
