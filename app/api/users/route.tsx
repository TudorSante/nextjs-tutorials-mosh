import { NextRequest, NextResponse } from "next/server";

/* Create the required Route Handlers */
export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    {
      id: 1,
      name: "Mosh",
    },
    {
      id: 2,
      name: "Josh",
    },
  ]);
}
