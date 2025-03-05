"use client";

import ProductCard from "@/components/product-components/product-card/productCard";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import { Box } from "@mui/material";
import PaginationUI from "@/components/home-components/Pagination";
import { IProduct } from "@/type/serverTypes";
import { useUserCategoryQuery } from "@/api/client-api/user/category";
import { useUserProductsQuery } from "@/api/client-api/user/products";

interface CategoryPageProps {
  params: { slug: string };
  searchParams: { page?: string; pageSize?: string };
}

export default function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = params;

  const { data: category, isLoading: categoryLoading } =
    useUserCategoryQuery(slug);

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useUserProductsQuery({ ...searchParams, categorySlug: slug });

  const filteredProducts = products?.results.filter(
    (p) => p.category && p.category.titleEn === slug
  );

  if (categoryLoading || productsLoading) return <div>در حال بارگذاری...</div>;
  if (productsError) return <div>خطا در دریافت محصولات</div>;
  if (!category || !products) return null;

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
        <div className="flex flex-wrap gap-4 justify-center items-center my-4">
          {filteredProducts?.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationUI count={products?.total} />
      </Box>
    </>
  );
}
