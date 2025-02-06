import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { refreshTokenAction } from "./actions/auth/refresh-token";

const protectedRoutes: string[] = ["/dashboard", "/shop"];
const publicRoutes: string[] = ["/", "/auth/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  const isPublicRoute = publicRoutes.includes(path);

  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;
  const isLogin = !!accessToken && !!refreshToken;
  const isLogout = !accessToken && !refreshToken;
  const needToRefresh = !accessToken && !!refreshToken;

  if (needToRefresh) {
    const refreshed = await refreshTokenAction();
    if (refreshed !== undefined && refreshed) {
      return NextResponse.redirect(new URL(path, req.nextUrl));
    }
  }

  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  if (isPublicRoute && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
