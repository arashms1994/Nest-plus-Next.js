import { ServerPageProps } from "@/type/serverTypes";
import { BrandsTable } from "./brands-table";
import { getBrands } from "@/api/server-api/admin/brands";
import { TableContainer } from "@/components/dashboard-components/tables/table-container";

export default async function BrandsPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const brands = getBrands(params);
  return (
    <TableContainer title="برند" createLink="/dashboard/brands/create">
      <BrandsTable brands={brands} />
    </TableContainer>
  );
}
