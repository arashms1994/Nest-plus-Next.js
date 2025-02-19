import { userGetProducts } from "@/api/server-api/user/user-products";
import React from "react";
import ProductCard from "../product-components/product-card/productCard";

const HomeProducts = async () => {
  const products = await userGetProducts();

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {products.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeProducts;
