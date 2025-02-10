"use server";
import "server-only";

import { ADMIN_BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "../base";
import { CategoryType } from "@/lib/validations/serverActionsSchema";
import { ICategory, PaginatedResultApi } from "@/type/serverTypes";

// Create a new category
export const createCategory = async (
  body: Partial<CategoryType>
): Promise<ICategory> => {
  try {
    return apiFetch<ICategory>(`${ADMIN_BASE_URL}/categories`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch (e) {
    throw e;
  }
};

// Update an existing category
export const updateCategory = async (
  id: string,
  body: Partial<CategoryType>
): Promise<ICategory> => {
  const data = await apiFetch<ICategory>(`${ADMIN_BASE_URL}/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`categories-${id}`);
  return data;
};

// Get a paginated list of categories
export const getCategories = async (
  params?: unknown
): Promise<PaginatedResultApi<ICategory>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICategory>>(
    `${ADMIN_BASE_URL}/categories?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a category
export const deleteCategory = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${ADMIN_BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });
};

// Get a category by its ID
export const getCategoryById = async (id: string): Promise<ICategory> => {
  return apiFetch<ICategory>(`${ADMIN_BASE_URL}/categories/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleCategory", `categories-${id}`],
    },
  });
};
