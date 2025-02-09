import { AreaChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/area-chart";
import { BarChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/bar-chart";
import { PieChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/pie-chart";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <AreaChartAnalytics />
      <BarChartAnalytics />
      <PieChartAnalytics />
    </>
  );
};

export default Dashboard;
