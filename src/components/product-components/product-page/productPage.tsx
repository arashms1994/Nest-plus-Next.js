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

interface Product {
  id: number;
  code: string;
  titleEn: string;
  titleFa: string;
  price: number;
  rating: number;
  stock: number;
  isMarketable: boolean;
  expertReview: string;
  specifications: { label: string; value: string }[];
  colors: { name: string; code: string }[];
  images: { main: string; thumbnails: string[] }[];
}

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSpecifications, setShowSpecifications] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const product: Product = {
    id: 1,
    code: "PRD001",
    titleEn: "Premium Leather Jacket",
    titleFa: "کت چرم",
    price: 299.99,
    rating: 4.5,
    stock: 10,
    isMarketable: true,
    expertReview:
      "Exceptional quality and craftsmanship. Perfect fit and premium materials used.",
    specifications: [
      { label: "Material", value: "Genuine Leather" },
      { label: "Fit", value: "Regular" },
      { label: "Care", value: "Dry Clean Only" },
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#8B4513" },
      { name: "Tan", code: "#D2B48C" },
    ],
    images: [
      {
        main: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        thumbnails: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5",
          "https://images.unsplash.com/photo-1551028719-00167b16eac5",
          "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        ],
      },
    ],
  };

  const handleColorSelect = (index: number) => {
    setSelectedColor(index);
    setCurrentImageIndex(0);
  };

  const handleQuantityChange = (action: "increment" | "decrement") => {
    if (action === "increment" && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageChange = (direction: "next" | "prev") => {
    const totalImages = product.images[0].thumbnails.length;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

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
                src={product.images[0].thumbnails[currentImageIndex]}
                alt={product.titleEn}
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
                onClick={() => handleImageChange("prev")}
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
                onClick={() => handleImageChange("next")}
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
              {product.images[0].thumbnails.map((thumb, idx) => (
                <Button
                  key={idx}
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
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
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

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Rating value={product.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary">
                  ({product.rating})
                </Typography>
              </Box>

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
                        bgcolor: color.code,
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

              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Quantity
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Button
                    onClick={() => handleQuantityChange("decrement")}
                    variant="outlined"
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <Typography>{quantity}</Typography>
                  <Button
                    onClick={() => handleQuantityChange("increment")}
                    variant="outlined"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </Button>
                </Box>
              </Box>

              <Button
                variant="contained"
                size="large"
                fullWidth
                disabled={!product.isMarketable}
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
                          {spec.label}:
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
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
                  {product.expertReview}
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
