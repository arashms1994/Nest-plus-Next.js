// import { userGetProducts } from "@/api/server-api/user/user-products";
// import React from "react";
// import ProductCard from "../product-components/product-card/productCard";
// import { ServerPageProps } from "@/type/serverTypes";

// const HomeProducts = async ({ searchParams }: ServerPageProps) => {
//   const params = await searchParams;
//   const products = await userGetProducts(params);

//   return (
//     <div className="flex flex-wrap gap-4 justify-center items-center">
//       {products.results.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default HomeProducts;

import { userGetProducts } from "@/api/server-api/user/user-products";
import React from "react";
import ProductCard from "../product-components/product-card/productCard";
import { ServerPageProps } from "@/type/serverTypes";

const HomeProducts = async ({ searchParams }: ServerPageProps) => {
  const params = await searchParams;
  const products = await userGetProducts(params);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center my-3">
      {products.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeProducts;