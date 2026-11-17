import type { ContactFormData } from "../interfaces/form-data.interface"
import { postContactForm } from "../service/contact-form.axios"
import { useMutation } from "@tanstack/react-query"


export const useMutationContactForm = () => useMutation({
    mutationFn: (data: ContactFormData) => postContactForm(data),
    mutationKey: ["contact-form"]
})