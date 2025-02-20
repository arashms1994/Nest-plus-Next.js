import { userGetProducts } from "@/api/server-api/user/user-products";
import CategoriesList from "@/components/home-components/CategoriesList";
import Footer from "@/components/home-components/footer/footer";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import HomeProducts from "@/components/home-components/HomeProducts";
import Navbar from "@/components/home-components/navbar/navbar";
import PaginationUI from "@/components/home-components/Pagination";
import { ModeToggle } from "@/components/theme-toggle/ModeToggle";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import { CartStoreProvider } from "@/providers/CartProvider";
import QueryProvider from "@/providers/QueryProvider";
import { IUser, ServerPageProps } from "@/type/serverTypes";
import { Box } from "@mui/material";
import React from "react";

interface IHomePageProps {
  user: IUser;
  searchParams: ServerPageProps;
}

const HomePage = async ({ user, searchParams }: IHomePageProps) => {
  const { accessToken } = await auth();
  const products = await userGetProducts();
  const count = products.total;

  return (
    <>
      <CartStoreProvider>
        <AuthProvider accessToken={accessToken || ""}>
          <QueryProvider>
            <div className="bg-white dark:bg-black">
              <Navbar user={user} accessToken={accessToken || ""} />
              <HeroSection />
              <Box
                sx={{
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: 1120,
                  marginBottom: "50px",
                }}
              >
                <CategoriesList />
                <HomeProducts />
                <ModeToggle />
                <PaginationUI count={count} />
              </Box>
              <Footer />
            </div>
          </QueryProvider>
        </AuthProvider>
      </CartStoreProvider>
    </>
  );
};

export default HomePage;
