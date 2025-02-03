"use server";
import "server-only";

import { revalidateTag } from "next/cache";
import { apiFetch } from "../base";
import { CategoryType } from "@/lib/validations/serverActionsSchema";
import { ICategory, PaginatedResultApi } from "@/type/serverTypes";
import { SHOP_BASE_URL } from "@/config.server";

// Create a new category
export const shopCreateCategory = async (
  body: Partial<CategoryType>
): Promise<ICategory> => {
  try {
    return apiFetch<ICategory>(`${SHOP_BASE_URL}/categories`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch (e) {
    throw e;
  }
};

// Update an existing category
export const shopUpdateCategory = async (
  id: string,
  body: Partial<CategoryType>
): Promise<ICategory> => {
  const data = await apiFetch<ICategory>(`${SHOP_BASE_URL}/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`shop-categories-${id}`);
  return data;
};

// Get a paginated list of categories
export const shopGetCategories = async (
  params?: unknown
): Promise<PaginatedResultApi<ICategory>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICategory>>(
    `${SHOP_BASE_URL}/categories?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a category
export const shopDeleteCategory = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${SHOP_BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });
};

// Get a category by its ID
export const shopGetCategoryById = async (id: string): Promise<ICategory> => {
  return apiFetch<ICategory>(`${SHOP_BASE_URL}/categories/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleCategory", `shop-categories-${id}`],
    },
  });
};
