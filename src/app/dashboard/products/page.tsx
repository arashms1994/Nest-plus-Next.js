import { getProducts } from "@/api/server-api/admin/products";
import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { ServerPageProps } from "@/type/serverTypes";
import { ProductTable } from "./products-table";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const products = await getProducts(params);
  return (
    <TableContainer title="محصول" createLink="/dashboard/products/create">
      <ProductTable products={products} />
    </TableContainer>
  );
}
