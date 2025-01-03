import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

interface Params {
  params: Promise<{ id: number }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  const id = (await params)?.id;
  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const id = (await params)?.id;
  const data = await request.json();
  const updatedTask = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: data,
  });
  return NextResponse.json(updatedTask);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const id = (await params)?.id;
  try {
    const taskDeleted = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(taskDeleted);
  } catch (err: unknown) {
    console.log(err);
    return NextResponse.json("no existe el registro");
  }
}
