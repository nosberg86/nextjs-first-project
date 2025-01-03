import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "El titulo es obligatorio"),
  description: z
    .string()
    .min(1, "La descripcion es obligatoria")
    .max(20, "No debe tener mas de 20 carateres"),
});

export type taskFormValues = z.infer<typeof schema>;
