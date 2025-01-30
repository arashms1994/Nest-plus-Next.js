import { getAllSellers } from "@/api/server-api/sellers";
import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { SellerTable } from "./sellers-table";
import { ServerPageProps } from "@/type/serverTypes";

export default async function SellersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const sellers = getAllSellers(params);
  return (
    <TableContainer title="فروشگاه ها" createLink="/dashboard/sellers/create">
      <SellerTable sellers={sellers} />
    </TableContainer>
  );
}
