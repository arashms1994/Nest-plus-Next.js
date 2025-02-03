import { SHOP_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { IOrder, PaginatedResultApi } from "@/type/serverTypes";

export const sellerGetOrders = async (
  params?: any
): Promise<PaginatedResultApi<IOrder>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IOrder>>(
    `${SHOP_BASE_URL}/orders?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
