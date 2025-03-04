import Footer from "@/components/home-components/footer/footer";
import Navbar from "@/components/home-components/navbar/navbar";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import { IUser } from "@/type/serverTypes";
import React from "react";

const layout = async ({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: IUser;
}>) => {
  const { accessToken } = await auth();

  return (
    <>
      <AuthProvider accessToken={accessToken || ""}>
        <div className="bg-white dark:bg-black">
          <Navbar user={user} accessToken={accessToken || ""} />
          <QueryProvider>{children} </QueryProvider>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
};

export default layout;
