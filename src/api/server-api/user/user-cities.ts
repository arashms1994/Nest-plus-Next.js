import { AUTH_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { ICity, PaginatedResultApi } from "@/type/serverTypes";

export const userGetCitys = async (
  params?: unknown
): Promise<PaginatedResultApi<ICity>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICity>>(
    `${AUTH_BASE_URL}/cities?${search.toString()}`
  );
};