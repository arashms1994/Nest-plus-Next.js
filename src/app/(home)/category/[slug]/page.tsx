// // app/categories/[id]/page.tsx
// import { userGetCategory } from "@/api/server-api/user/user-category";
// import { ICategory } from "@/type/serverTypes";
// import { notFound } from "next/navigation";

// export default async function CategoryPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   let category: ICategory;
//   try {
//     category = await userGetCategory(slug);
//   } catch (error) {
//     notFound();
//   }

//   return (
//     <div>
//       <h1>{category.titleFa}</h1>
//       <p>{category.icon}</p>
//     </div>
//   );
// }

// app/(home)/category/[slug]/page.tsx
import {
  userGetProducts,
  userGetProductsByCategory,
} from "@/api/server-api/user/user-products";
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
  const { slug } = params;

  const productsCount = await userGetProducts();
  const count = productsCount.total;

  let category: ICategory;
  const products = await userGetProductsByCategory(slug);

  try {
    category = await userGetCategory(slug);
  } catch (error) {
    notFound();
  }

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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationUI count={count} />
      </Box>
    </>
  );
}
