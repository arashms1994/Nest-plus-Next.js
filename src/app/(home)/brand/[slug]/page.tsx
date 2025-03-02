import { userGetProducts } from "@/api/server-api/user/user-products";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import PaginationUI from "@/components/home-components/Pagination";
import ProductCard from "@/components/product-components/product-card/productCard";
import { IProduct } from "@/type/serverTypes";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

interface BrandPageProps {
  params: { brand: string };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const productsCount = await userGetProducts();
  const count = productsCount.total;
  const { brand } = params;

  const products = await userGetProducts({ brand });

  if (!products || products.results.length === 0) {
    return notFound();
  }

  return (
    <>
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
        <h1>{brand}</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {products.results.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationUI count={count} />
      </Box>
    </>
  );
}
