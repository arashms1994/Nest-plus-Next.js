"use client";

import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { IProduct } from "@/type/serverTypes";

interface ProductSpecificationsProps {
  product: IProduct;
}

const ProductSpecifications = ({ product }: ProductSpecificationsProps) => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  return (
    <Box>
      <Button
        onClick={() => setShowSpecifications(!showSpecifications)}
        color="primary"
      >
        {showSpecifications ? "مخفی کردن مشخصات" : "نمایش مشخصات"}
      </Button>
      {showSpecifications && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {product.specifications.map((spec) => (
            <Box
              key={spec.id}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body2" color="text.secondary">
                {spec.title}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {spec.value}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductSpecifications;
