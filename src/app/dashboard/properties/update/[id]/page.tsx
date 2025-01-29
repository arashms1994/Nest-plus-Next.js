import { getPropertiesById } from "@/api/server-api/properties";
import PropertyForm from "@/components/dashboard-components/forms/property-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateProperty({ params }: ServerPageProps) {
  const { id } = await params;
  const Property = await getPropertiesById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش دسته بندی</Typography>
          <PropertyForm defaultValue={Property} />
        </CardContent>
      </Card>
    </Box>
  );
}
