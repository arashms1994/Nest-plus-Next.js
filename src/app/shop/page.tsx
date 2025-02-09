import { AreaChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/area-chart";
import { BarHorizontalAnalytics } from "@/components/dashboard-components/dashboard-analytics/bar-horizontal";
import { PieChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/pie-chart";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <AreaChartAnalytics />
      <BarHorizontalAnalytics />
      <PieChartAnalytics />
    </>
  );
};

export default Dashboard;
