import { TableContainer } from "@/components/dashboard-components/tables/table-container";
import { ServerPageProps } from "@/type/serverTypes";
import { ShopOrdersTable } from "./shop-orders-table";
import { shopGetOrders } from "@/api/server-api/shop/shop-orders";

export default async function ShopOrdersPage({
  searchParams,
}: ServerPageProps) {
  const params = await searchParams;
  const orders = shopGetOrders(params);
  return (
    <TableContainer title="سفارش ها">
      <ShopOrdersTable orders={orders} />
    </TableContainer>
  );
}
