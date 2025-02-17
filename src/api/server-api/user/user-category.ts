import { AUTH_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { ICategory, PaginatedResultApi } from "@/type/serverTypes";

export const userGetCategories = async (
  params?: unknown
): Promise<PaginatedResultApi<ICategory>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICategory>>(
    `${AUTH_BASE_URL}/categories?${search.toString()}`
  );
};

export const userGetCategory = async (id: string): Promise<ICategory> => {
  return apiFetch<ICategory>(`${AUTH_BASE_URL}/categories/${id}`);
};
