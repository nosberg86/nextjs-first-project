interface task {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}
import TaskCard from "@/components/TaskCard";

async function loadTask() {
  const res = await fetch("http://localhost:3000/api/task");
  const data: task[] = await res.json();
  return data;
}

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
