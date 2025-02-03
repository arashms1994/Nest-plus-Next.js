import ProductForm from "@/components/dashboard-components/forms/product-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function ShopCreateProductPage() {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد محصول جدید</Typography>
          <ProductForm />
        </CardContent>
      </Card>
    </Box>
  );
}
