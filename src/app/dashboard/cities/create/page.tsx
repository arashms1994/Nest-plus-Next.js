import CityForm from "@/components/dashboard-components/forms/city-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function CreateCity() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد شهر جدید</Typography>
          <CityForm />
        </CardContent>
      </Card>
    </Box>
  );
}
