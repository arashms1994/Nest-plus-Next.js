"use client"

import React, { useState } from "react";
import {
  Typography,
  Rating,
  Box,
  Button,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import {
  Favorite,
  Compare,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "@mui/icons-material";
import { IProduct } from "@/type/serverTypes";

interface Product {
  product:IProduct
}

const ProductPage = ({product}:Product) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSpecifications, setShowSpecifications] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleColorSelect = (index: number) => {
    setSelectedColor(index);
    setCurrentImageIndex(0);
  };

  // const handleQuantityChange = (action: "increment" | "decrement") => {
  //   if (action === "increment" && quantity < product.stock) {
  //     setQuantity(quantity + 1);
  //   } else if (action === "decrement" && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const handleImageChange = (direction: "next" | "prev") => {
  //   const totalImages = product.images[0].thumbnails.length;
  //   if (direction === "next") {
  //     setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  //   } else {
  //     setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  //   }
  // };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Grid container spacing={4} p={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
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
                src={product.images.main}
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
                  gap: 1,
                }}
              >
                <IconButton
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  sx={{ bgcolor: "background.paper" }}
                >
                  <Favorite color={isWishlisted ? "error" : "action"} />
                </IconButton>
                <IconButton sx={{ bgcolor: "background.paper" }}>
                  <Compare color="action" />
                </IconButton>
              </Box>
              <IconButton
                // onClick={() => handleImageChange("prev")}
                sx={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "background.paper",
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                // onClick={() => handleImageChange("next")}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "background.paper",
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}
            >
              {product.images.list.map((index) => (
                <Button
                  key={index}
                  // onClick={() => setCurrentImageIndex(index)}
                  // sx={{
                  //   width: 64,
                  //   height: 64,
                  //   borderRadius: 1,
                  //   overflow: "hidden",
                  //   border: currentImageIndex === index ? "2px solid" : "none",
                  //   borderColor:
                  //     currentImageIndex === index
                  //       ? "primary.main"
                  //       : "transparent",
                  // }}
                >
                  <Box
                    component="img"
                    src={index}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Product Info Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                {product.titleEn}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {product.titleFa}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Product Code: {product.code}
              </Typography>

              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Colors
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {product.colors.map((color, idx) => (
                    <IconButton
                      key={idx}
                      onClick={() => handleColorSelect(idx)}
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: color.hexCode,
                        border: selectedColor === idx ? "2px solid" : "none",
                        borderColor:
                          selectedColor === idx
                            ? "primary.main"
                            : "transparent",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Button
                variant="contained"
                size="large"
                fullWidth
                disabled={!product}
                startIcon={<ShoppingCart />}
              >
                Add to Cart
              </Button>

              <Box>
                <Button
                  onClick={() => setShowSpecifications(!showSpecifications)}
                  color="primary"
                >
                  {showSpecifications ? "Hide" : "Show"} Specifications
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
                    {product.specifications.map((spec, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {product.review}:
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>

              <Box sx={{ borderTop: 1, borderColor: "divider", pt: 2 }}>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Expert Review
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.expert_review}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductPage;
