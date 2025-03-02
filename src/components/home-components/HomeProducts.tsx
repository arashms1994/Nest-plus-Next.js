import { userGetProducts } from "@/api/server-api/user/user-products";
import React, { Suspense } from "react";
import ProductCard from "../product-components/product-card/productCard";
import { ServerPageProps } from "@/type/serverTypes";

const HomeProducts = async ({ searchParams }: ServerPageProps) => {
  const params = searchParams;
  const products = await userGetProducts(params);

  if (!products || !products.results) {
    return <div>No products found.</div>;
  }

  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <div className="flex flex-wrap gap-4 justify-center items-center my-3">
        {products.results.map((product) => (
          <ProductCard key={product.id} product={product} productSeller={product.bestSeller}/>
        ))}
      </div>
    </Suspense>
  );
};

export default HomeProducts;
