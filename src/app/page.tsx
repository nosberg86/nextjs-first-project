import TaskCard from "@/components/TaskCard";
import prisma from "@/libs/prisma";

async function loadTask() {
  return await prisma.task.findMany();
}

export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await loadTask();
  return (
    <div className="container mx-auto ">
      <div className="grid gap-3 mt-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
