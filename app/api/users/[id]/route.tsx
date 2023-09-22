import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Mosh" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the request body
  const body = await request.json();
  // If invalid, return 400 - bad req
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // Fetch the user with the given id
  // If doesn't exists, return 404 - not found
  if (id > 10)
    return NextResponse.json(
      { error: "User not existent in DB." },
      { status: 404 }
    );

  // Update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // Fetch the user from db
  // If not found, return 404
  // Delte the user
  // Return 200 as response
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
