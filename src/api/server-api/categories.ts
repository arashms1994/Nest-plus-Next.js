"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { ICategory, PaginatedResultApi } from "@/type/serverTypes";
import { apiFetch } from "./base";
import { revalidateTag } from "next/cache";

export const createCategory = async (body: Partial<ICategory>): Promise<ICategory> => {
  return apiFetch<ICategory>(`${BASE_URL}/categories`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateCategory = async (
  id: string,
  body: Partial<ICategory>
): Promise<ICategory> => {
  const data = await apiFetch<ICategory>(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`categories-${id}`);
  return data;
};

export const getcategories = async (
  params?: any
): Promise<PaginatedResultApi<ICategory>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return await apiFetch<PaginatedResultApi<ICategory>>(
    `${BASE_URL}/categories?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteCategory = async (id: string): Promise<{ massage: string }> => {
  return apiFetch<{ massage: string }>(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });
};

export const getCategoryById = async (id: string): Promise<ICategory> => {
  return await apiFetch<ICategory>(`${BASE_URL}/categories/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleCategory", `categories-${id}`],
    },
  });
};
