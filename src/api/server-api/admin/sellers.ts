"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "./base";
import { SellerType } from "@/lib/validations/serverActionsSchema";
import { ISeller, PaginatedResultApi } from "@/type/serverTypes";

export const createSeller = async (
  body: Partial<SellerType>
): Promise<ISeller> => {
  return apiFetch<ISeller>(`${BASE_URL}/sellers`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateSeller = async (
  id: string,
  body: Partial<SellerType>
): Promise<ISeller> => {
  try {
    const data = await apiFetch<ISeller>(`${BASE_URL}/sellers/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    revalidateTag(`sellers-${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getAllSellers = async (
  params?: any
): Promise<PaginatedResultApi<ISeller>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ISeller>>(
    `${BASE_URL}/sellers?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteSeller = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${BASE_URL}/sellers/${id}`, {
    method: "DELETE",
  });
};

export const getSellerById = async (id: string): Promise<ISeller> => {
  return apiFetch<ISeller>(`${BASE_URL}/sellers/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleSeller", `sellers-${id}`],
    },
  });
};
