import { userGetProducts } from "@/api/server-api/user/user-products";
import { notFound } from "next/navigation";
import ProductCard from "@/components/product-components/product-card/productCard";
import { ICategory } from "@/type/serverTypes";
import { userGetCategory } from "@/api/server-api/user/user-category";
import { HeroSection } from "@/components/home-components/hero/heroSection";
import { Box } from "@mui/material";
import PaginationUI from "@/components/home-components/Pagination";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page?: string; pageSize?: string };
}) {
  const { slug } = await params;
  let category: ICategory;

  try {
    category = await userGetCategory(slug);
  } catch (error) {
    notFound();
  }

  const products = await userGetProducts();
  const count = products.total;

  const filteredProducts = products.results.filter(
    (p) => p.category.slug !== category.slug
  );
  console.log("category:", category);

  try {
  } catch (error) {
    return <div>خطا در دریافت محصولات</div>;
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
        <h1>{category.titleFa}</h1>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationUI count={count} />
      </Box>
    </>
  );
}
