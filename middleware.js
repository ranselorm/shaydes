// middleware.js
import { NextResponse } from "next/server";

export default function middleware(req) {
  let loggedin = true;
  const { pathname } = req.nextUrl;
  console.log(pathname);

  if (loggedin && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!loggedin && pathname === "/courses") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //   if (loggedin && pathname === "/courses") {
  //     return NextResponse.redirect(new URL("/courses", req.url));
  //   }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
