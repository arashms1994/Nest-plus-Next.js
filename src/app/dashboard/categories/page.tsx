import { getCategories } from "@/api/server-api/admin/categories";
import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { ServerPageProps } from "@/type/serverTypes";
import { CategoriesTable } from "./categories-table";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const categories = await getCategories(params);
  return (
    <TableContainer title="دسته بندی" createLink="/dashboard/categories/create">
      <CategoriesTable categories={categories} />
    </TableContainer>
  );
}
