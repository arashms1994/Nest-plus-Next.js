import { getBrandById } from "@/api/server-api/admin/brands";
import { BrandForm } from "@/components/dashboard-components/forms/brand-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function Page({ params }: ServerPageProps) {
  const { id } = await params;
  const brand = await getBrandById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش برند</Typography>
          <BrandForm brand={brand} />
        </CardContent>
      </Card>
    </Box>
  );
}
