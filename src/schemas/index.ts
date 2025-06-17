import { z } from "zod";

export const formLeadsSchema = z.object({
    name: z.string().min(1, { message: "El nombre es requerido" }),
    phone: z.number().min(1, { message: "El teléfono es requerido" }),
    turn: z.enum(["mañana", "tarde"]),
})

