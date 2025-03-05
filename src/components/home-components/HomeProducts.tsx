"use client";

export interface ServerPageProps {
  searchParams?: {
    q?: string;
    [key: string]: string | string[] | undefined;
  };
}

import React from "react";
import ProductCard from "../product-components/product-card/productCard";
import { IProduct } from "@/type/serverTypes";
import { useUserProductsQuery } from "@/api/client-api/user/products";

const HomeProducts = ({ searchParams }: ServerPageProps) => {
  const q = typeof searchParams?.q === "string" ? searchParams.q : "";

  const { data: products, isLoading, isError } = useUserProductsQuery(q);

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (isError || !products || !products.results) {
    return <div>No products found.</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center my-3">
      {products.results.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeProducts;
