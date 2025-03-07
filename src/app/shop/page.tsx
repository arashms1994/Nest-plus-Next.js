import { AreaChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/area-chart";
import { BarHorizontalAnalytics } from "@/components/dashboard-components/dashboard-analytics/bar-horizontal";
import { PieChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/pie-chart";
import { Stack } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <BarHorizontalAnalytics />
        <PieChartAnalytics />
        <AreaChartAnalytics />
      </Stack>
    </>
  );
};

export default Dashboard;
