"use server";

import { apiFetch } from "@/api/server-api/base";
import { AUTH_BASE_URL } from "@/config.server";
import { auth, createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function refreshTokenAction() {
  try {
    const { refreshToken } = await auth();

    const data = await apiFetch<{ accessToken: string; refreshToken: string }>(
      AUTH_BASE_URL + "/auth/refresh",
      {
        method: "post",
        body: JSON.stringify({ refreshToken }),
      }
    );
    await createSession(data);
  } catch (e) {
    await deleteSession();
    redirect("/auth/login");
  }
}
