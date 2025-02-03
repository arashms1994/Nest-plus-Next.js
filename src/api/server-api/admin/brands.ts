"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { IBrand, PaginatedResultApi } from "@/type/serverTypes";
import { apiFetch } from "../base";
import { revalidateTag } from "next/cache";

export const createBrand = async (body: Partial<IBrand>): Promise<IBrand> => {
  return apiFetch<IBrand>(`${BASE_URL}/brands`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateBrand = async (
  id: string,
  body: Partial<IBrand>
): Promise<IBrand> => {
  const data = await apiFetch<IBrand>(`${BASE_URL}/brands/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`brands-${id}`);
  return data;
};

export const getBrands = async (
  params?: any
): Promise<PaginatedResultApi<IBrand>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return await apiFetch<PaginatedResultApi<IBrand>>(
    `${BASE_URL}/brands?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteBrand = async (id: string): Promise<{ massage: string }> => {
  return apiFetch<{ massage: string }>(`${BASE_URL}/brands/${id}`, {
    method: "DELETE",
  });
};

export const getBrandById = async (id: string): Promise<IBrand> => {
  return await apiFetch<IBrand>(`${BASE_URL}/brands/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleBrand", `brands-${id}`],
    },
  });
};
