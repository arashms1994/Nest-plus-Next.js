"use client";

import React from "react";
import { IProduct, SellerInfo } from "@/type/serverTypes";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { AddToCartButton } from "./AddToCart";

interface IProductProps {
  product: IProduct;
  productSeller: SellerInfo;
}

const ProductCard = ({ product, productSeller }: IProductProps) => {
  return (
    <Link href={"/product/" + product.code}>
      <Card className="w-[265px] h-[350px] flex flex-col items-center justify-center rounded relative py-2">
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
          <div className="flex justify-between w-full items-start mt-3">
            {product.bestSeller && (
              <div className="flex gap-2">
                <p className="font-semibold text-black text-base">
                  {product.bestSeller.lastPrice.toLocaleString("fa")} تومان
                </p>
              </div>
            )}
          </div>
          {product.bestSeller?.discount && (
            <div className="bg-red-500 rounded-full p-1 absolute top-2 left-2">
              <p className="font-normal text-white text-sm">
                {product.bestSeller?.discount.toLocaleString("fa")}%
              </p>
            </div>
          )}
          <AddToCartButton product={product} productSeller={productSeller} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
