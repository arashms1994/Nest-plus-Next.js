import { AUTH_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { IBrand, PaginatedResultApi } from "@/type/serverTypes";

export const userGetbrands = async (
  params?: unknown
): Promise<PaginatedResultApi<IBrand>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IBrand>>(
    `${AUTH_BASE_URL}/brands?${search.toString()}`
  );
};

export const userGetBrand = async (id: string): Promise<IBrand> => {
  return apiFetch<IBrand>(`${AUTH_BASE_URL}/brands/${id}`);
};
