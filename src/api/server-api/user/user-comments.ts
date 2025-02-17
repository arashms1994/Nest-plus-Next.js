"use server";
import "server-only";

import { AUTH_BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { apiFetch } from "../base";
import { CommentType } from "@/lib/validations/serverActionsSchema";
import { IComment, PaginatedResultApi } from "@/type/serverTypes";

export const createComment = async (
  body: Partial<CommentType>
): Promise<IComment> => {
  try {
    return apiFetch<IComment>(`${AUTH_BASE_URL}/comments`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch (e) {
    throw e;
  }
};

export const updateComment = async (
  id: string,
  body: Partial<CommentType>
): Promise<IComment> => {
  const data = await apiFetch<IComment>(`${AUTH_BASE_URL}/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`comments-${id}`);
  return data;
};

export const getcomments = async (
  params?: unknown
): Promise<PaginatedResultApi<IComment>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IComment>>(
    `${AUTH_BASE_URL}/comments?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const deleteComment = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${AUTH_BASE_URL}/comments/${id}`, {
    method: "DELETE",
  });
};

export const getCommentById = async (productId: string): Promise<IComment> => {
  return apiFetch<IComment>(`${AUTH_BASE_URL}/product/${productId}/comments`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleComment", `comments-${productId}`],
    },
  });
};
