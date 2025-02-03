import { getSellerById } from "@/api/server-api/admin/sellers";
import SellerForm from "@/components/dashboard-components/forms/sellers-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default async function UpdateSellerPage({ params }: ServerPageProps) {
  const { id } = await params;
  const seller = await getSellerById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش فروشگاه</Typography>
          <SellerForm defaultValue={seller} />
        </CardContent>
      </Card>
    </Box>
  );
}
