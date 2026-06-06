import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("authjs.session-token")?.value;

  const isLoggedIn = !!sessionToken;
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && pathname.startsWith("/profile")) {
    const signInUrl = new URL("signin", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  if (isLoggedIn && pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
  if (isLoggedIn && pathname.startsWith("/signup")) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
