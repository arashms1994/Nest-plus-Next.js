"use client";

import React, { useState } from "react";
import {
  Typography,
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
} from "@mui/icons-material";
import { IProduct, SellerInfo } from "@/type/serverTypes";
import PropertyCard from "./PropertyCard";
import { AddToCartButton } from "../product-card/AddToCart";

interface IProductProps {
  product: IProduct;
  productSeller: SellerInfo;
}

const ProductPage = ({ product, productSeller }: IProductProps) => {
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

  const handleImageChange = (direction: "next" | "prev") => {
    const totalImages = product.images.list.length;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  const currentImage =
    product.images.list[currentImageIndex] || product.images.main;

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
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  sx={{ bgcolor: "background.paper" }}
                >
                  <Favorite color={isWishlisted ? "error" : "action"} />
                </IconButton>
              </Box>
              <IconButton
                onClick={() => handleImageChange("prev")}
                sx={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(50%)",
                  bgcolor: "background.paper",
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={() => handleImageChange("next")}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(50%)",
                  bgcolor: "background.paper",
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}
            >
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
                      currentImageIndex === idx
                        ? "primary.main"
                        : "transparent",
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
            <div className="flex flex-wrap justify-start items-center gap-3 mt-4">
              {product.category.properties.map((p) => (
                <PropertyCard
                  key={p.id}
                  name={p.name}
                  label={p.label}
                  id={p.id}
                />
              ))}
            </div>
          </Grid>

          {/* Product Details */}
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
                      key={color.id} // استفاده از id به‌جای idx
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
                      title={color.title} // اضافه کردن عنوان رنگ به‌عنوان tooltip
                    />
                  ))}
                </Box>
              </Box>

              <AddToCartButton
                product={product}
                productSeller={productSeller}
              />

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
                    {product.specifications.map((spec) => (
                      <Box
                        key={spec.id}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
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
