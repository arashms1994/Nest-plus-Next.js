"use server";
import "server-only";

import { ADMIN_BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "../base";
import { ProductType } from "@/lib/validations/serverActionsSchema";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";

export const createProduct = async (
  body: Partial<ProductType>
): Promise<IProduct> => {
  return apiFetch<IProduct>(`${ADMIN_BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateProduct = async (
  id: string,
  body: Partial<ProductType>
): Promise<IProduct> => {
  try {
    const data = await apiFetch<IProduct>(`${ADMIN_BASE_URL}/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    revalidateTag(`products-${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getProducts = async (
  params?: any
): Promise<PaginatedResultApi<IProduct>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProduct>>(
    `${ADMIN_BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteProduct = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${ADMIN_BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
};

export const getProductById = async (id: string): Promise<IProduct> => {
  return apiFetch<IProduct>(`${ADMIN_BASE_URL}/products/${id}`, {
    next: {
      tags: ["allSingleProduct", `products-${id}`],
    },
  });
};
