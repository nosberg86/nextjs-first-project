"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "@/components/CustomInput";
import CustomTextArea from "./CustomTextArea";
import { taskFormValues, schema } from "@/models/taskSchema";
import { useRouter } from "next/navigation";
import { Task } from "@prisma/client";

interface props {
  url: string;
  task?: Task | null;
}

const CustomForm = ({ url, task }: props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<taskFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: task?.title,
      description: task?.description,
    },
  });

  const onSubmit: SubmitHandler<taskFormValues> = async (formData) => {
    const title = formData.title;
    const description = formData.description;
    let resp: Response;

    if (task?.id) {
      resp = await fetch(url + task.id, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-type": "aplication/json",
        },
      }); //Edit
    } else {
      resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-type": "aplication/json",
        },
      });
    }
    const data = await resp.json();
    console.log(data);
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2 rounded"
    >
      <CustomInput
        name="title"
        control={control}
        label="Titulo de la Tarea"
        type="text"
        error={errors.title}
      />
      <CustomTextArea
        name="description"
        control={control}
        label="Descripcion de la Tarea"
        rows={3}
        error={errors.description}
      />
      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          {task?.id ? "Edit Task" : "Create Task"}
        </button>
        {task?.id && (
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded ml-4"
            onClick={async () => {
              const resp = await fetch(url + task?.id, { method: "DELETE" });
              const data = await resp.json();
              console.log(data);
              router.push("/");
            }}
          >
            {" Delete Task "}
          </button>
        )}
      </div>
    </form>
  );
};

export default CustomForm;
