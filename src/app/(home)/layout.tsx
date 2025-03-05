import Footer from "@/components/home-components/footer/footer";
import Navbar from "@/components/home-components/navbar/navbar";
import { auth } from "@/lib/session";
import QueryProvider from "@/providers/QueryProvider";
import { SearchProvider } from "@/providers/SearchProvider";
import React from "react";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <QueryProvider>
        <SearchProvider>
          <div className="bg-white dark:bg-black">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SearchProvider>
      </QueryProvider>
    </>
  );
};

export default layout;
