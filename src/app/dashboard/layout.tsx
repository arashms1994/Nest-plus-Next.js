import DashboardHeader from "@/components/dashboard-components/dashboard-layout/dashboard-header";
import DrawerHeader from "@/components/dashboard-components/dashboard-layout/drawer-header";
import MiniDrawer from "@/components/dashboard-components/dashboard-layout/mini-drawer";
import DrawerProvider from "@/providers/DrawerProvider";
import QueryProvider from "@/providers/QueryProvider";
import { Box } from "@mui/material";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <Box sx={{ display: "flex" }}>
        <DrawerProvider>
          <DashboardHeader />
          <MiniDrawer />
        </DrawerProvider>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </QueryProvider>
  );
}

export default DashboardLayout;
