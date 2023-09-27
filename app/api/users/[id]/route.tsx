import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      // the values we have in our URL are treated as strings, so they need conv
      id: Number(params.id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the request body
  const body = await request.json();
  // If invalid, return 400 - bad req
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Fetch the user with the given id
  // If doesn't exists, return 404 - not found
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const newUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  // Update the user
  // Return the updated user
  return NextResponse.json(newUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // Fetch the user from db
  // If not found, return 404
  // Delte the user
  // Return 200 as response
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({ where: { id: user.id } });

  return NextResponse.json({});
}
