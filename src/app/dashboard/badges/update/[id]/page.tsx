import { getBadgeById } from "@/api/server-api/badges";
import { CreateBadgeForm } from "@/components/dashboard-components/forms/create-badge";
import { ServerPageProps } from "@/type/serverTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default async function UpdateBadgePage({ params }: ServerPageProps) {
  const { badgeID } = await params;
  const badge = await getBadgeById(badgeID);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش برچسب</Typography>
          <CreateBadgeForm defaultValue={badge} />
        </CardContent>
      </Card>
    </Box>
  );
}
