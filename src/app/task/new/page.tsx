import CustomForm from "@/components/CustomForm";
import { Task } from "@prisma/client";

type Params = Promise<{ id: number }>;

async function newTask({ params }: { params: Params }) {
  //const router = useRouter();
  const id = (await params)?.id;
  let data: Task | undefined;
  if (id) {
    const resp = await fetch(`http://localhost:3000/api/task/${id}`);
    data = await resp.json();
  }
  return (
    <div className="h-screen flex justify-center items-center ">
      <CustomForm url="/api/task/" task={data} />
    </div>
  );
}

export default newTask;
