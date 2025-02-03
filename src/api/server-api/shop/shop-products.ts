"use server";
import "server-only";

import { SHOP_BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "../base";
import { ProductType } from "@/lib/validations/serverActionsSchema";
import { IProduct, PaginatedResultApi } from "@/type/serverTypes";

export const shopCreateProduct = async (
  body: Partial<ProductType>
): Promise<IProduct> => {
  return apiFetch<IProduct>(`${SHOP_BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const shopUpdateProduct = async (
  id: string,
  body: Partial<ProductType>
): Promise<IProduct> => {
  try {
    const data = await apiFetch<IProduct>(`${SHOP_BASE_URL}/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    revalidateTag(`shop-products-${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const shopGetProducts = async (
  params?: any
): Promise<PaginatedResultApi<IProduct>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProduct>>(
    `${SHOP_BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const shopDeleteProduct = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${SHOP_BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
};

export const shopGetProductById = async (id: string): Promise<IProduct> => {
  return apiFetch<IProduct>(`${SHOP_BASE_URL}/products/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleShopProduct", `shop-products-${id}`],
    },
  });
};
