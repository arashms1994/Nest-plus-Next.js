"use server";
import "server-only";

import { ADMIN_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import { IUser, PaginatedResultApi } from "@/type/serverTypes";

export const getAllUsers = async (
  params?: any
): Promise<PaginatedResultApi<IUser>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IUser>>(
    `${ADMIN_BASE_URL}/auth/users?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const getUsersById = async (id: string): Promise<IUser> => {
  return apiFetch<IUser>(`${ADMIN_BASE_URL}/auth/users/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleusers", `users-${id}`],
    },
  });
};

export const changeUserStatus = async (
  id: string,
  data: { isActive: boolean }
): Promise<IUser> => {
  return apiFetch<IUser>(`${ADMIN_BASE_URL}/auth/users/${id}/change-status`, {
    method: "post",
    cache: "force-cache",
    body: JSON.stringify(data),
  });
};
