import CategoryForm from "@/components/dashboard-components/forms/category-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function CreateCity() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد دسته‌بندی جدید</Typography>
          <CategoryForm />
        </CardContent>
      </Card>
    </Box>
  );
}
