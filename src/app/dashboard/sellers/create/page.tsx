import SellerForm from "@/components/dashboard-components/forms/sellers-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function CreateSeller() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد فروشگاه جدید</Typography>
          <SellerForm />
        </CardContent>
      </Card>
    </Box>
  );
}
