import ShopCategoryForm from "@/components/dashboard-components/forms/shop-forms/shop-category-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function ShopCreateCategory() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد دسته‌بندی جدید</Typography>
          <ShopCategoryForm />
        </CardContent>
      </Card>
    </Box>
  );
}
