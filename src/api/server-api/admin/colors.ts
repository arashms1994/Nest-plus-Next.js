"use server";
import "server-only";

import { ADMIN_BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "../base";
import { IColor, PaginatedResultApi } from "@/type/serverTypes";

export const createColor = async (body: Partial<IColor>): Promise<IColor> => {
  return apiFetch<IColor>(`${ADMIN_BASE_URL}/colors`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateColor = async (
  id: string,
  body: Partial<IColor>
): Promise<IColor> => {
  const data = await apiFetch<IColor>(`${ADMIN_BASE_URL}/colors/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`colors-${id}`);
  return data;
};

export const getColors = async (
  params?: any
): Promise<PaginatedResultApi<IColor>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IColor>>(
    `${ADMIN_BASE_URL}/colors?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteColor = async (id: string): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${ADMIN_BASE_URL}/colors/${id}`, {
    method: "DELETE",
  });
};

export const getColorById = async (id: string): Promise<IColor> => {
  return apiFetch<IColor>(`${ADMIN_BASE_URL}/colors/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleColor", `colors-${id}`],
    },
  });
};