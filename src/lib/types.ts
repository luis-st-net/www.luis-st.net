import * as Icons from "lucide-react";
import { z } from "zod";

export interface Route {
	title: string,
	icon?: Icons.LucideIcon,
	route: string,
	subRoutes: Route[],
}

export const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
	acceptTerms: z.boolean().refine(value => value, "You must accept the contact conditions"),
	bot: z.boolean().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
