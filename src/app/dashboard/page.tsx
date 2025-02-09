import { BarChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/bar-chart";
import DashboardAnalytics from "@/components/dashboard-components/dashboard-analytics/dashboard-ui";
import { PieChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/pie-chart";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <BarChartAnalytics />
      <PieChartAnalytics />
      <DashboardAnalytics />
    </>
  );
};

export default Dashboard;
