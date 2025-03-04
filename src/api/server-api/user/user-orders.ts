import { AUTH_BASE_URL } from "@/config.server";
import {
  IOrder,
  PaginatedResultApi,
} from "@/type/serverTypes";
import { apiFetch } from "../base";

export const userCreateOrder = async (
body: Partial<IOrder>): Promise<IOrder> => {
  try {
    return apiFetch<IOrder>(`${AUTH_BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch (e) {
    throw e;
  }
};

export const userGetOrders = async (
  params?: unknown
): Promise<PaginatedResultApi<IOrder>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IOrder>>(
    `${AUTH_BASE_URL}/orders?${search.toString()}`
  );
};
