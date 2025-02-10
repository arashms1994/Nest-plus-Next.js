import { BarChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/bar-chart";
import DashboardAnalytics from "@/components/dashboard-components/dashboard-analytics/dashboard-ui";
import { PieChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/pie-chart";
import { Stack } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <BarChartAnalytics />
        <PieChartAnalytics />
      </Stack>
      <DashboardAnalytics />
    </>
  );
};

export default Dashboard;
