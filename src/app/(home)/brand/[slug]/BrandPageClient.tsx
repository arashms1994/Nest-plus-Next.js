"use client";

import { useUserBrandQuery } from "@/api/client-api/user/brands";
import { useUserProductsQuery } from "@/api/client-api/user/products";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import PaginationUI from "@/components/home-components/Pagination";
import ProductCard from "@/components/product-components/product-card/productCard";
import { IProduct } from "@/type/serverTypes";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { useEffect } from "react";

interface BrandPageClientProps {
  slug: string;
  searchParams?: { page?: string; pageSize?: string };
}

export default function BrandPageClient({
  slug,
  searchParams,
}: BrandPageClientProps) {
  const queryParams = {
    page: searchParams?.page,
    pageSize: searchParams?.pageSize,
    brandSlug: slug,
  };

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
    isSuccess: productsSuccess,
  } = useUserProductsQuery(queryParams);

  const {
    data: brandData,
    isLoading: brandLoading,
    error: brandError,
  } = useUserBrandQuery(slug);

  useEffect(() => {
    if (productsSuccess && (!products || products.results.length === 0)) {
      notFound();
    }
  }, [productsSuccess, products]);

  if (productsLoading || brandLoading) return <div>در حال بارگذاری...</div>;
  if (productsError || brandError) return <div>خطا در دریافت اطلاعات</div>;
  if (!products) return null;

  const FilteredProducts = products.results.filter((p)=> p.brand.slug === slug)

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
        <div className="flex flex-wrap gap-4 justify-center items-center my-5">
          {FilteredProducts.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationUI count={products.total} />
      </Box>
    </>
  );
}
