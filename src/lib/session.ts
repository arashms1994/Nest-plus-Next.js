import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createSession(token: {
  accessToken: string;
  refreshToken: string;
  role?: number;
}) {
  const accessExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
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
  if (token.role) {
    cookieStore.set("role", token.role.toString(), {
      httpOnly: true,
      secure: true,
      expires: refreshExpiresAt,
      sameSite: "lax",
      path: "/",
    });
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete("role");
}

export async function auth() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  const role = cookieStore.get("role")?.value;
  const isLogin = accessToken && refreshToken;
  const needToRefresh = !accessToken && refreshToken;
  const isLogout = !refreshToken;
  return {
    accessToken,
    refreshToken,
    role,
    isLogin,
    needToRefresh,
    isLogout,
  };
}

export async function ensureAuthenticated() {
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }
}
