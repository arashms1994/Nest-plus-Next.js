import { shopGetProductById } from "@/api/server-api/shop/shop-products";
import ShopProductForm from "@/components/dashboard-components/forms/shop-forms/shop-product-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function ShopUpdateProduct({ params }: ServerPageProps) {
  const { id } = await params;
  const product = await shopGetProductById(id);
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش محصول</Typography>
          <ShopProductForm defaultValue={product} />
        </CardContent>
      </Card>
    </Box>
  );
}
