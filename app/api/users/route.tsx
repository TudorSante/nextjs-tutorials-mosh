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

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  // status 201 - new obj created
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
