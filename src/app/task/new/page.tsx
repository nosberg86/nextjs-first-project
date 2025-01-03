import CustomForm from "@/components/CustomForm";
import prisma from "@/libs/prisma";
import { Task } from "@prisma/client";

type Params = Promise<{ id: number }>;

async function newTask({ params }: { params: Params }) {
  //const router = useRouter();
  const id = (await params)?.id;
  let data: Task | null | undefined;

  if (id) {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });
    data = task;
  }
  return (
    <div className="h-screen flex justify-center items-center ">
      <CustomForm url="/api/task/" task={data} />
    </div>
  );
}

export default newTask;
