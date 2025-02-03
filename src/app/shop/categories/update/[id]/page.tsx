import { shopGetCategoryById } from "@/api/server-api/shop/shop-categories";
import CategoryForm from "@/components/dashboard-components/forms/category-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function ShopUpdateCategory({ params }: ServerPageProps) {
  const { id } = await params;
  const category = await shopGetCategoryById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش دسته بندی</Typography>
          <CategoryForm defaultValue={category} />
        </CardContent>
      </Card>
    </Box>
  );
}
