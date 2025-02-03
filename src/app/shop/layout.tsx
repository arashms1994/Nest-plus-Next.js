import DashboardHeader from "@/components/dashboard-components/dashboard-layout/dashboard-header";
import DrawerHeader from "@/components/dashboard-components/dashboard-layout/drawer-header";
import ShopMiniDrawer from "@/components/dashboard-components/dashboard-layout/shop-mini-drawer";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import DrawerProvider from "@/providers/DrawerProvider";
import QueryProvider from "@/providers/QueryProvider";
import { Box } from "@mui/material";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();
  return (
    <AuthProvider accessToken={accessToken || ""}>
      <QueryProvider>
        <Box sx={{ display: "flex" }}>
          <DrawerProvider>
            <DashboardHeader />
            <ShopMiniDrawer />
          </DrawerProvider>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </QueryProvider>
    </AuthProvider>
  );
}

export default DashboardLayout;
