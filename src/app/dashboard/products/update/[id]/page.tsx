import { getProductById } from "@/api/server-api/products";
import ProductForm from "@/components/dashboard-components/forms/product-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateCity({ params }: ServerPageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش محصول</Typography>
          <ProductForm defaultValue={product} />
        </CardContent>
      </Card>
    </Box>
  );
}
