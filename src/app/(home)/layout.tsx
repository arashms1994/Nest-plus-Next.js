import Footer from "@/components/home-components/footer/footer";
import Navbar from "@/components/home-components/navbar/navbar";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import { SearchProvider } from "@/providers/SearchProvider";
import { IUser } from "@/type/serverTypes";
import React from "react";

const layout = async ({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: IUser;
}>) => {
  const { accessToken, role } = await auth();

  return (
    <>
      <AuthProvider accessToken={accessToken || ""}>
        <QueryProvider>
          <SearchProvider>
            <div className="bg-white dark:bg-black">
              <Navbar role={role || ""} accessToken={accessToken || ""} />
              {children}
              <Footer />
            </div>
          </SearchProvider>
        </QueryProvider>
      </AuthProvider>
    </>
  );
};

export default layout;
