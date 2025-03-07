import { getOrders } from "@/api/server-api/admin/orders";
import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { ServerPageProps } from "@/type/serverTypes";
import { OrdersTable } from "./orders-table";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const orders = getOrders(params);
  return (
    <TableContainer title="سفارش ها">
      <OrdersTable orders={orders} />
    </TableContainer>
  );
}
