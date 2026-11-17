
import { PROJECT_CATEGORY_OPTIONS } from "../../constants/projectCategory.constants";
import { PrimaryButton } from "../ui/PrimaryButton";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "../../interfaces/form-data.interface";
import { contactFormSchema } from "../../schema/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
    className?: string;
    mutate: (data: ContactFormData) => void;
}

export const CustomForm = ({ className, mutate }: Props) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            category: "",
            message: "",
        },
    });

    /*     const onSubmit = async (data: ContactFormData) => {
            setSubmitMessage("");
            setSubmitError("");
        
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
        
                const result = await response.json();
        
                if (!response.ok) {
                    throw new Error(
                        result.error || "No se pudo enviar el mensaje."
                    );
                }
        
                setSubmitMessage("¡Mensaje enviado correctamente!");
                reset();
        
            } catch (error) {
                setSubmitError(
                    error instanceof Error
                        ? error.message
                        : "Ha ocurrido un error al enviar el mensaje."
                );
            }
        };
     */

        const onSubmit = (data: ContactFormData) => {
            mutate(data)

        }
    
    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-small text-muted uppercase tracking-widest">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-gray-500 "
                        placeholder="Your name"
                    />
                    {errors.name && (
                        <p id="name-error" role="alert" className="text-xs text-red-500 mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-small text-muted uppercase tracking-widest">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-gray-500 "
                        placeholder="you@example.com"
                    />
                    {errors.email && (
                        <p id="email-error" role="alert" className="text-xs text-red-500 mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="category" className="text-small text-muted uppercase tracking-widest">
                    Project category
                </label>
                <select
                    id="category"
                    defaultValue=""
                    {...register("category")}
                    aria-invalid={!!errors.category}
                    aria-describedby={errors.category ? "category-error" : undefined}
                    className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors "
                >
                    <option value="" disabled>
                        Select a category
                    </option>
                    {PROJECT_CATEGORY_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errors.category && (
                    <p id="category-error" role="alert" className="text-xs text-red-500 mt-1">
                        {errors.category.message}
                    </p>
                )}
            </div>

            <div className="mt-6 flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-small text-muted uppercase tracking-widest">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="resize-y border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
                    placeholder="Tell me about your project"
                />
                {errors.message && (
                    <p id="message-error" role="alert" className="text-xs text-red-500 mt-1">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <PrimaryButton
                bgColor="bg-shert/70"
                onClick={() => handleSubmit(onSubmit)}
                content="Send form"
                variant="default"
                contentColor=""
            />
        </form>
    );
};
