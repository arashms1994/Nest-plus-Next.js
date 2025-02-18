import Footer from "@/components/home-components/footer/footer";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import Navbar from "@/components/home-components/navbar/navbar";
import ProductCard from "@/components/product-components/product-card/productCard";
import ProductPage from "@/components/product-components/product-page/productPage";
import { ModeToggle } from "@/components/theme-toggle/ModeToggle";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import { CartStoreProvider } from "@/providers/CartProvider";
import QueryProvider from "@/providers/QueryProvider";
import { IUser } from "@/type/serverTypes";
import { Box } from "@mui/material";
import React from "react";

interface IHomePageProps {
  user: IUser;
}

const HomePage = async ({ user }: IHomePageProps) => {
  const { accessToken } = await auth();

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
              <ProductCard/>
              <ModeToggle />
              <ProductPage />
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
