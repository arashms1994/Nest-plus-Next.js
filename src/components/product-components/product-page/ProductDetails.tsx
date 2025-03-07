"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import { IProduct } from "@/type/serverTypes";

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h4" fontWeight="bold">
        {product.titleEn}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        {product.titleFa}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        کد محصول: {product.code}
      </Typography>
      <Box sx={{ borderTop: 1, borderColor: "divider", pt: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          بررسی تخصصی
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {product.expert_review}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
