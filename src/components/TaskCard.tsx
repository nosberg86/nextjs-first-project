"use client";

import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";

interface task {
  task: Task;
}

export default function TaskCard({ task }: task) {
  const route = useRouter();
  return (
    <div
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => {
        route.push("/task/edit/" + task.id);
      }}
    >
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
