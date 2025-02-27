import { userGetProducts } from "@/api/server-api/user/user-products";
import React from "react";
import ProductCard from "../product-components/product-card/productCard";
import { ServerPageProps } from "@/type/serverTypes";

const HomeProducts = async ({ searchParams }: ServerPageProps) => {
  const params = searchParams;
  const products = await userGetProducts(params);

  if (!products || !products.results) {
    return <div>No products found.</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center my-3">
      {products.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeProducts;
