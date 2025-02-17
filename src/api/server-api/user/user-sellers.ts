import { AUTH_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { ISeller, PaginatedResultApi } from "@/type/serverTypes";

export const userGetsellers = async (
  params?: unknown
): Promise<PaginatedResultApi<ISeller>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ISeller>>(
    `${AUTH_BASE_URL}/sellers?${search.toString()}`
  );
};

export const userGetSeller = async (id: string): Promise<ISeller> => {
  return apiFetch<ISeller>(`${AUTH_BASE_URL}/sellers/${id}`);
};
