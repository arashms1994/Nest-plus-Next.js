import { BarChartAnalytics } from "@/components/dashboard-components/dashboard-analytics/bar-chart";
import DashboardAnalytics from "@/components/dashboard-components/dashboard-analytics/dashboard-ui";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <DashboardAnalytics />
      <BarChartAnalytics />
    </>
  );
};

export default Dashboard;
