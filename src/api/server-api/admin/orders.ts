import { BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { IOrder, PaginatedResultApi } from "@/type/serverTypes";

export const getOrders = async (
  params?: any
): Promise<PaginatedResultApi<IOrder>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IOrder>>(
    `${BASE_URL}/orders?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
