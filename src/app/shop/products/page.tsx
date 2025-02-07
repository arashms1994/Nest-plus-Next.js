import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { ServerPageProps } from "@/type/serverTypes";
import { ShopProductTable } from "./products-table";
import { shopGetProducts } from "@/api/server-api/shop/shop-products";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const products = await shopGetProducts(params);
  return (
    <TableContainer title="محصول" createLink="/shop/products/create">
      <ShopProductTable products={products} />
    </TableContainer>
  );
}
