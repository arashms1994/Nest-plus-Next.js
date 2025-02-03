"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { IBadge, PaginatedResultApi } from "@/type/serverTypes";
import { apiFetch } from "./base";
import { revalidateTag } from "next/cache";

export const createBadge = async (body: Partial<IBadge>) => {
  const data = await apiFetch(`${BASE_URL}/badges`, {
    method: "post",
    body: JSON.stringify(body),
  });
  return data;
};

export const updateBadge = async (id: string, body: any) => {
  const data = await apiFetch(`${BASE_URL}/badges/${id}`, {
    method: "post",
    body: JSON.stringify(body),
  });
  revalidateTag(`badges-${id.toString()}`);
  return data;
};

export const getBadges = async (params?: any) => {
  const search = new URLSearchParams(params);
  const data = await apiFetch<PaginatedResultApi<IBadge>>(
    `${BASE_URL}/badges?${search.toString()}`
  );
  return data;
};

export const deleteBadge = async (id: string): Promise<unknown> => {
  const res = await apiFetch(`${BASE_URL}/badges/${id}`, {
    method: "delete",
  });
  return res;
};

export const getBadgeById = async (id: string) => {
  const data = await apiFetch<IBadge>(`${BASE_URL}/badges/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleBadge", `badges-${id}`],
    },
  });
  return data;
};
