import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { ServerPageProps } from "@/type/serverTypes";
import { SellerOrdersTable } from "./seller-orders-table";
import { sellerGetOrders } from "@/api/server-api/seller/orders";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const orders = sellerGetOrders(params);
  return (
    <TableContainer title="سفارش ها">
      <SellerOrdersTable orders={orders} />
    </TableContainer>
  );
}
