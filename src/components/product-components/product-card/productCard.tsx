"use client";

import React from "react";
import { IProduct } from "@/type/serverTypes";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface IProductProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductProps> = async ({ product }) => {
  return (
    <Link href={"/product/" + product.code}>
      <Card className="w-[265px] h-[320px] flex flex-col items-center justify-center rounded relative">
        <CardHeader className="w-[265px] h-[250px] rounded-t">
          <img
            src={product.images.main}
            alt={product.titleEn}
            width={265}
            height={350}
          />
        </CardHeader>
        <CardContent className="flex flex-col justify-start items-start w-full m-3">
          <h3 className="font-semibold text-base truncate max-w-60">
            {product.titleFa}
          </h3>
          <div className="flex justify-between items-start mt-3">
            {product.bestSeller && (
              <p className="font-semibold text-black text-sm">
                {product.bestSeller?.lastPrice.toLocaleString("fa")} تومان
              </p>
            )}
            {product.bestSeller?.discount && (
              <p className="font-normal text-gray-400 text-sm">
                {product.bestSeller?.discount.toLocaleString("fa")}%
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
