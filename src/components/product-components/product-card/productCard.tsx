import React from 'react';
import { Card, CardContent, Typography, Rating, Box } from '@mui/material';

interface ProductProps {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  rating: number;
}

const ProductCard: React.FC<ProductProps> = ({ name, originalPrice, discountedPrice, rating }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          NEW
        </Typography>
        <Typography variant="body1" color="error" gutterBottom>
          -50%
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
          ${originalPrice}
        </Typography>
        <Typography variant="h6" color="success.main">
          ${discountedPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;