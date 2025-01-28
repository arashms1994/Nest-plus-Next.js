"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "./base";
import { IProperty, PaginatedResultApi } from "@/type/serverTypes";

export const createProperties = async (
  body: Partial<IProperty>
): Promise<IProperty> => {
  return apiFetch<IProperty>(`${BASE_URL}/properties`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateProperties = async (
  id: string,
  body: Partial<IProperty>
): Promise<IProperty> => {
  const data = await apiFetch<IProperty>(`${BASE_URL}/properties/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`properties-${id}`);
  return data;
};

export const getProperties = async (
  params?: any
): Promise<PaginatedResultApi<IProperty>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProperty>>(
    `${BASE_URL}/properties?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteProperties = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${BASE_URL}/properties/${id}`, {
    method: "DELETE",
  });
};

export const getPropertiesById = async (id: string): Promise<IProperty> => {
  return apiFetch<IProperty>(`${BASE_URL}/properties/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleProperties", `properties-${id}`],
    },
  });
};
