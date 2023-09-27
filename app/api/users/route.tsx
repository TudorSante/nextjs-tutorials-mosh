import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

/* Create the required Route Handlers */
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  // fetch users from a db
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json(
      { error: "User already exists." },
      { status: 400 }
    );

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  // sending the status 201 implies that the req obj was successfully created => 201 Created
  return NextResponse.json(newUser, { status: 201 });
}
