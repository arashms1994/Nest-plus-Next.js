"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "./base";
import { ProductType } from "@/lib/validations/serverActionsSchema";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";

export const createProduct = async (
  body: Partial<ProductType>
): Promise<IProduct> => {
  return apiFetch<IProduct>(`${BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateProduct = async (
  id: string,
  body: Partial<ProductType>
): Promise<IProduct> => {
  try {
    const data = await apiFetch<IProduct>(`${BASE_URL}/products/${id}`, {
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
    `${BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteProduct = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
};

export const getProductById = async (id: string): Promise<IProduct> => {
  return apiFetch<IProduct>(`${BASE_URL}/products/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleProduct", `products-${id}`],
    },
  });
};
