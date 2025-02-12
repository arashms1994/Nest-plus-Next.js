import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { refreshTokenAction } from "./actions/auth/refresh-token";
import { auth } from "./lib/session";

const protectedRoutes = [
  "/admin/dashboard",
  "/seller/dashboard",
  "/profile",
  "/checkout",
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((protectedRoute) =>
    path.startsWith(protectedRoute)
  );

  const { isLogin, isLogout, needToRefresh, role } = await auth();

  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(new URL(req.nextUrl, req.nextUrl));
  }
  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  if (path.startsWith("/auth") && isLogin) {
    if (role === "3") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.nextUrl));
    } else if (role === "2") {
      return NextResponse.redirect(new URL("/seller/dashboard", req.nextUrl));
    }
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
