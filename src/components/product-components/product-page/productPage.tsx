"use client";

import React, { useState } from "react";
import { Grid, Paper, Box } from "@mui/material";
import { IProduct, SellerInfo } from "@/type/serverTypes";
import ProductImages from "./ProductImages";
import ProductColors from "./ProductColors";
import ProductSpecifications from "./ProductSpecifications";
import ProductDetails from "./ProductDetails";
import PropertyCard from "./PropertyCard";
import { AddToCartButton } from "../product-card/AddToCart";

interface IProductProps {
  product: IProduct;
  productSeller: SellerInfo;
}

const ProductPage = ({ product, productSeller }: IProductProps) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleColorSelect = (index: number) => {
    setSelectedColor(index);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }} dir="rtl">
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Grid container spacing={4} p={4}>
          <Grid item xs={12} md={6}>
            <ProductImages
              product={product}
              isWishlisted={isWishlisted}
              onWishlistToggle={() => setIsWishlisted(!isWishlisted)}
            />
            <div className="flex flex-wrap justify-start items-center gap-3 mt-4">
              {product.category.properties.map((p) => (
                <PropertyCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  label={p.label}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <ProductDetails product={product} />
              <ProductColors
                product={product}
                selectedColor={selectedColor}
                onColorSelect={handleColorSelect}
              />
              <AddToCartButton
                product={product}
                productSeller={productSeller}
              />
              <ProductSpecifications product={product} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductPage;