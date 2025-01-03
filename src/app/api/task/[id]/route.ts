import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { ErrorInfo } from "react";

interface params {
  params: { id: number };
}

export async function GET(request: NextRequest, { params }: params) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request: NextRequest, { params }: params) {
  const data = await request.json();
  const updatedTask = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(updatedTask);
}

export async function DELETE(request: NextRequest, { params }: params) {
  try {
    const taskDeleted = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(taskDeleted);
  } catch (err: any) {
    return NextResponse.json("no existe el registro");
  }
}
