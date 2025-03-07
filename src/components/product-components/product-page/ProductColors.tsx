"use client";

import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { IProduct } from "@/type/serverTypes";

interface ProductColorsProps {
  product: IProduct;
  selectedColor: number;
  onColorSelect: (index: number) => void;
}

const ProductColors = ({
  product,
  selectedColor,
  onColorSelect,
}: ProductColorsProps) => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        رنگ‌ها
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {product.colors.map((color, idx) => (
          <IconButton
            key={color.id}
            onClick={() => onColorSelect(idx)}
            sx={{
              width: 32,
              height: 32,
              bgcolor: color.hexCode,
              border: selectedColor === idx ? "2px solid" : "none",
              borderColor:
                selectedColor === idx ? "primary.main" : "transparent",
            }}
            title={color.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductColors;
