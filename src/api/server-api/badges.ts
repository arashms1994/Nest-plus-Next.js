"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/session";
import { IBadge, PaginatedResultApi } from "@/type/serverTypes";
import { apiFetch } from "./base";

export const createBadge = async (body: Partial<IBadge>) => {
  const data = await apiFetch(`${BASE_URL}/badges`, {
    method: "post",
    body: JSON.stringify(body)
  })
  return data
};

export const getBadges = async (
  params?: any
): Promise<PaginatedResultApi<IBadge>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/badges?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};

export const deleteBadge = async (id: string): Promise<Response> => {
  const { accessToken } = await auth();
  const res = await fetch(`${BASE_URL}/badges/${id}`, {
    method: "delete",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
