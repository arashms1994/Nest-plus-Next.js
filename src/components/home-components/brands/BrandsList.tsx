"use client";

import React from "react";
import BrandsCarousel from "./BrandsCarousel";
import { IBrand } from "@/type/serverTypes";

interface BrandsListProps {
  brands: IBrand[];
}

export const BrandsList = ({ brands }: BrandsListProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded m-5 p-2">
      <div className="flex gap-2 flex-wrap justify-center items-center">
        <BrandsCarousel brands={brands} />
      </div>
    </div>
  );
};
