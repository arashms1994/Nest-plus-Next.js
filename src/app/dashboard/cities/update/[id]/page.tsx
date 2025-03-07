import { getCityById } from "@/api/server-api/admin/cities";
import CityForm from "@/components/dashboard-components/forms/city-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateCity({ params }: ServerPageProps) {
  const { id } = await params;
  const City = await getCityById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش دسته بندی</Typography>
          <CityForm defaultValue={City} />
        </CardContent>
      </Card>
    </Box>
  );
}
