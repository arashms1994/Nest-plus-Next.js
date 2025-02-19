import { userGetCategory } from "@/api/server-api/user/user-category";
import { userGetProductById } from "@/api/server-api/user/user-products";
import ProductPage from "@/components/product-components/product-page/productPage";
import { IProduct, ServerPageProps } from "@/type/serverTypes";
import React from "react";

const page = async ({ params }: ServerPageProps) => {
  const { id } = await params;
  const product = await userGetCategory(id);

  return <ProductPage product={product} />;
};

export default page;
