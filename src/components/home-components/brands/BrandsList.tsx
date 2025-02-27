import React from "react";
import { userGetbrands } from "@/api/server-api/user/user-brands";
import BrandsCarousel from "./BrandsCarousel";

export const BrandsList = async () => {
  const brands = await userGetbrands();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 rounded m-5 p-2">
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <BrandsCarousel brands={brands.results} />
        </div>
      </div>
    </>
  );
};
