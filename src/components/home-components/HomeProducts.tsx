// src/components/home-components/HomeProducts.tsx
"use client";

import { useUserProductsQuery } from "@/api/client-api/user/products";
import ProductCard from "@/components/product-components/product-card/productCard";
import { useSearch } from "@/providers/SearchProvider";
import { IProduct } from "@/type/serverTypes";

interface HomeProductsProps {
  params: { page?: string; pageSize?: string };
}

export default function HomeProducts({ params }: HomeProductsProps) {
  const { searchQuery } = useSearch();

  const queryParams = {
    page: params?.page,
    pageSize: params?.pageSize,
    q: searchQuery,
  };

  const {
    data: products,
    isLoading,
    error,
  } = useUserProductsQuery(queryParams);

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error || !products || !products.results)
    return <div>خطا در دریافت محصولات</div>;

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center my-3">
      {products.results.map((product: IProduct) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}
