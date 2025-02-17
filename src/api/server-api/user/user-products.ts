"use server";
import "server-only";

import { AUTH_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { IProduct, ISeller, PaginatedResultApi } from "@/type/serverTypes";

export const userGetProducts = async (
  params?: unknown
): Promise<PaginatedResultApi<IProduct>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProduct>>(
    `${AUTH_BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const userGetProductById = async (id: string): Promise<IProduct> => {
  return apiFetch<IProduct>(`${AUTH_BASE_URL}/products/${id}`);
};

export const userGetSellersByProductId = async (id: string): Promise<ISeller[]> => {
  return apiFetch<ISeller[]>(`${AUTH_BASE_URL}/products/${id}/sellers`);
};
