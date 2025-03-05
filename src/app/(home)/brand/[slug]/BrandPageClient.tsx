"use client";

import { useUserProductsQuery } from "@/api/client-api/user/products";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import PaginationUI from "@/components/home-components/Pagination";
import ProductCard from "@/components/product-components/product-card/productCard";
import { IProduct } from "@/type/serverTypes";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { useSearch } from "@/providers/SearchProvider";
import { useUserBrandQuery } from "@/api/client-api/user/brands";

interface BrandPageClientProps {
  slug: string;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function BrandPageClient({
  slug,
  searchParams,
}: BrandPageClientProps) {
  const { searchQuery } = useSearch();
  const queryParams = {
    page: typeof searchParams.page === "string" ? searchParams.page : undefined,
    pageSize:
      typeof searchParams.pageSize === "string"
        ? searchParams.pageSize
        : undefined,
    brandSlug: slug,
    q: searchQuery,
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
        <h1>{brandData?.titleFa || slug}</h1>
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
