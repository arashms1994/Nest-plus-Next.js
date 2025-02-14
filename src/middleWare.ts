import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { refreshTokenAction } from "./actions/auth/refresh-token";
import { auth } from "./lib/session";

// 1. Specify protected and public routes
const protectedRoutes = [
  "/admin/dashboard",
  "/seller/dashboard",
  "/profile",
  "/checkout",
];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((protectedRoute) =>
    path.startsWith(protectedRoute)
  );

  // 3. Decrypt the session from the cookie

  const { isLogin, isLogout, needToRefresh, role } = await auth();

  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(new URL(req.nextUrl, req.nextUrl));
  }
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (path.startsWith("/auth") && isLogin) {
    if (role === "3") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.nextUrl));
    } else if (role === "2") {
      return NextResponse.redirect(new URL("/seller/dashboard", req.nextUrl));
    }
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (path.startsWith(protectedRoutes[0]) && role !== "3") {
    // ToDo: redirect to 403
  }
  if (path.startsWith(protectedRoutes[1]) && role !== "2") {
    // ToDo: redirect to 403
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
