import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { refreshTokenAction } from "./actions/auth/refresh-token";

const protectedRoutes = "/dashboard";
const publicRoutes = "/";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.includes(publicRoutes);

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

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
