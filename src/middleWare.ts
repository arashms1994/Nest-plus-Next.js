import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { refreshTokenAction } from "./actions/auth/refresh-token";

const protectedRoutes = "/dashboard";
const publicRoutes = "/";

export async function middleWare(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.startsWith(publicRoutes);

  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;

  const isLogin = accessToken && refreshToken;
  const isLogout = !accessToken && !refreshToken;

  const needToRefresh = !accessToken && refreshToken;

  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(new URL(req.nextUrl, req.nextUrl));
  }

  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  if (isPublicRoute && !isProtectedRoute && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
