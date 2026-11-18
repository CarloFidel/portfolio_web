import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const contactFormSchema = z.object({
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

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // Solo permitimos peticiones POST
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método no permitido."
        });
    }

    try {
        // Validar los datos recibidos con Zod
        const validation = contactFormSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                error: "Comprueba los datos del formulario.",
                fieldErrors: validation.error.flatten().fieldErrors
            });
        }

        const { name, email, category, message } = validation.data;

        // Obtener credenciales privadas
        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL;
        const contactEmail = process.env.CONTACT_EMAIL;

        if (!apiKey || !senderEmail || !contactEmail) {
            console.error("Faltan variables de entorno de Brevo.");

            return res.status(500).json({
                error: "Error de configuración del servidor."
            });
        }

        // Enviar correo mediante Brevo
        const brevoResponse = await fetch(
            "https://api.brevo.com/v3/smtp/email",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": apiKey,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    sender: {
                        name: "Portfolio",
                        email: senderEmail
                    },
                    to: [
                        {
                            email: contactEmail
                        }
                    ],
                    replyTo: {
                        email,
                        name
                    },
                    subject: `Nuevo mensaje desde tu portfolio: ${name}`,
                    textContent:
                        `Nombre: ${name}\n` +
                        `Email: ${email}\n` +
                        `Categoría: ${category}\n\n` +
                        `Mensaje:\n${message}`
                })
            }
        );

        if (!brevoResponse.ok) {
            const errorDetails = await brevoResponse.text();

            console.error("Error de Brevo:", errorDetails);

            return res.status(502).json({
                error: "No se pudo enviar el mensaje. Inténtalo más tarde."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Mensaje enviado correctamente."
        });

    } catch (error) {
        console.error("Error en el endpoint de contacto:", error);

        return res.status(500).json({
            error: "Ha ocurrido un error inesperado."
        });
    }
}
