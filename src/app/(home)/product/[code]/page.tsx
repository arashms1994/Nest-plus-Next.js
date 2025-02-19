import { userGetProductById } from "@/api/server-api/user/user-products";
import ProductPage from "@/components/product-components/product-page/productPage";
import { IProduct, ServerPageProps } from "@/type/serverTypes";
import React from "react";

const page = async ({ params }: ServerPageProps) => {
  const { code } = await params;
  const product = await userGetProductById(code);

  return <ProductPage product={product} />;
};

export default page;
