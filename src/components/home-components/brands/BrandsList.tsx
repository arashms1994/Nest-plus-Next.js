import React from "react";
import { BrandsCarousel } from "./BrandsCarousel";
import { userGetbrands } from "@/api/server-api/user/user-brands";

export const BrandsList = async () => {
  const brands = await userGetbrands();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 border-2 rounded m-5 p-2">
        <div className="border-b-2 border-cyan-700">
          <h2 className="text-2xl font-semibold">برندها</h2>
        </div>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <BrandsCarousel brands={brands.results} />
        </div>
      </div>
    </>
  );
};
