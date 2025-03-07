"use client";

import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import {
  Favorite,
  Compare,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { IProduct } from "@/type/serverTypes";

interface ProductImagesProps {
  product: IProduct;
  isWishlisted: boolean;
  onWishlistToggle: () => void;
}

const ProductImages = ({
  product,
  isWishlisted,
  onWishlistToggle,
}: ProductImagesProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageChange = (direction: "next" | "prev") => {
    const totalImages = product.images.list.length;
    if (direction === "prev") {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  const currentImage =
    product.images.list[currentImageIndex] || product.images.main;

  return (
    <Box dir="rtl">
      <Box
        sx={{
          position: "relative",
          height: 400,
          overflow: "hidden",
          borderRadius: 2,
        }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Box
          component="img"
          src={currentImage}
          alt={product.titleFa}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isZoomed ? "scale(1.25)" : "scale(1)",
            transition: "transform 0.3s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            display: "flex",
            flexDirection: "row-reverse",
            gap: 1,
          }}
        >
          <IconButton
            onClick={onWishlistToggle}
            sx={{ bgcolor: "background.paper" }}
          >
            <Favorite color={isWishlisted ? "error" : "action"} />
          </IconButton>
        </Box>
        <IconButton
          onClick={() => handleImageChange("next")}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "background.paper",
          }}
        >
          <ChevronRight />
        </IconButton>
        <IconButton
          onClick={() => handleImageChange("prev")}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "background.paper",
          }}
        >
          <ChevronLeft />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
        {product.images.list.map((image, idx) => (
          <Button
            key={image}
            onClick={() => setCurrentImageIndex(idx)}
            sx={{
              width: 64,
              height: 64,
              borderRadius: 1,
              overflow: "hidden",
              border: currentImageIndex === idx ? "2px solid" : "none",
              borderColor:
                currentImageIndex === idx ? "primary.main" : "transparent",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Thumbnail ${idx + 1}`}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ProductImages;
