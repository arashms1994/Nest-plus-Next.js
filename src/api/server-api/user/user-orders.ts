import { AUTH_BASE_URL } from "@/config.server";
import {
  ICategory,
  IOrder,
  OrderStatus,
  PaginatedResultApi,
} from "@/type/serverTypes";
import { apiFetch } from "../base";

export const userCreateOrder = async (
  body: Partial<OrderStatus>
): Promise<ICategory> => {
  try {
    return apiFetch<ICategory>(`${AUTH_BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch (e) {
    throw e;
  }
};

export const userGetsellers = async (
  params?: unknown
): Promise<PaginatedResultApi<IOrder>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IOrder>>(
    `${AUTH_BASE_URL}/orders?${search.toString()}`
  );
};
