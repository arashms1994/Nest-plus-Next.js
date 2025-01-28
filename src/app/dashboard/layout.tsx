import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();
  return (
    <AuthProvider accessToken={accessToken || ""}>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
}

export default DashboardLayout;
