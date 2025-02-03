import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { ServerPageProps } from "@/type/serverTypes";
import { ShopCategoriesTable } from "./shop-categories-table";
import { shopGetCategories } from "@/api/server-api/shop/shop-categories";

export default async function ShopCategoryPage({
  searchParams,
}: ServerPageProps) {
  const params = await searchParams;
  const categories = await shopGetCategories(params);
  return (
    <TableContainer title="دسته بندی ها" createLink="/shop/categories/create">
      <ShopCategoriesTable categories={categories} />
    </TableContainer>
  );
}
