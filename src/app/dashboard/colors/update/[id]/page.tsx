import { getColorById } from "@/api/server-api/colors";
import ColorForm from "@/components/dashboard-components/forms/color-form";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateCity({ params }: ServerPageProps) {
  const { id } = await params;
  const color = await getColorById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش رنگ </Typography>
          <ColorForm defaultValue={color} />
        </CardContent>
      </Card>
    </Box>
  );
}
