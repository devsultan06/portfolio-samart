import { z } from "zod"

export const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(5, "Message must be at least 5 characters long"),
})

export type FormData = z.infer<typeof formSchema>