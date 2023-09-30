import { NextRequest, NextResponse } from "next/server";
// import and export the middleware fcn in one line
export { default } from "next-auth/middleware";

/* This fcn is executed on every req, so we can check if user is logged, if not
redirect it to the login page. */

export const config = {
  // *: zero or more params
  // +: one ore more
  // ?: zero or one
  matcher: ["/users/:id*"],
};
