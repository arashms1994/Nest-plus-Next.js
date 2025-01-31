import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createSession(token: {
  accessToken: string;
  refreshToken: string;
}) {
  const accessExpiresAt = new Date(Date.now() + 10 * 1000);
  const refreshExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set("accessToken", token.accessToken, {
    httpOnly: true,
    secure: true,
    expires: accessExpiresAt,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("refreshToken", token.refreshToken, {
    httpOnly: true,
    secure: true,
    expires: refreshExpiresAt,
    sameSite: "lax",
    path: "/",
  });
}
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}
export async function auth() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  return {
    accessToken,
    refreshToken,
  };
}

export async function ensureAuthenticated() {
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }
}
