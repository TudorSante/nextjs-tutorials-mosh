import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

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

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // sending the status 201 implies that the req obj was successfully created => 201 Created
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
