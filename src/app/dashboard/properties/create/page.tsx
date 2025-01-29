import PropertyForm from "@/components/dashboard-components/forms/property-form";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function CreateProperty() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد ویژگی جدید</Typography>
          <PropertyForm />
        </CardContent>
      </Card>
    </Box>
  );
}
