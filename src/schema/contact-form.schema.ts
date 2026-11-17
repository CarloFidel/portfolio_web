
import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters.")
        .max(100, "Name must be less than 100 characters."),

    email: z
        .email({ message: "Enter a valid email address." })
        .trim()
        .max(254, "Email address is too long."),

    category: z
        .string()
        .trim()
        .min(1, "Select a category.")
        .max(100, "Category must be less than 100 characters."),

    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters.")
        .max(5000, "Message must be less than 5000 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
