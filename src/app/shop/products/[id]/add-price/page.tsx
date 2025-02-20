import ShopProductForm from "@/components/dashboard-components/forms/shop-forms/shop-product-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function ShopCreateProductPage() {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">قیمت گذاری محصول</Typography>
          <ShopProductForm />
        </CardContent>
      </Card>
    </Box>
  );
}
