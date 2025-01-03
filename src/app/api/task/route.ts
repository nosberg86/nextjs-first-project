import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newTask = await prisma.task.create({
    data: data,
  });
  return NextResponse.json(newTask);
}
