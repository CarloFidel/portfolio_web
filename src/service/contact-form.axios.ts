import type { ContactFormData } from "../schema/contact-form.schema";
import axios from "axios";

export const postContactForm = async (data: ContactFormData) => {
    const response = await axios.post("/api/contact", data);
    return response.data;
}