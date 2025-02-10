"use server";
import "server-only";

import { ADMIN_BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "../base";
import { CityType } from "@/lib/validations/serverActionsSchema";
import { ICity, PaginatedResultApi } from "@/type/serverTypes";

export const createCity = async (body: Partial<CityType>): Promise<ICity> => {
  return apiFetch<ICity>(`${ADMIN_BASE_URL}/cities`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateCity = async (
  id: string,
  body: Partial<CityType>
): Promise<ICity> => {
  const data = await apiFetch<ICity>(`${ADMIN_BASE_URL}/cities/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`cities-${id}`);
  return data;
};

export const getCities = async (
  params?: any
): Promise<PaginatedResultApi<ICity>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICity>>(
    `${ADMIN_BASE_URL}/cities?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteCity = async (id: string): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${ADMIN_BASE_URL}/cities/${id}`, {
    method: "DELETE",
  });
};

export const getCityById = async (id: string): Promise<ICity> => {
  return apiFetch<ICity>(`${ADMIN_BASE_URL}/cities/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleCity", `cities-${id}`],
    },
  });
};