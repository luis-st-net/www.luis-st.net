import * as Icons from "lucide-react";
import { z } from "zod";
import type { IconType } from "react-icons";

export const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
	acceptTerms: z.boolean().refine(value => value, "You must accept the contact conditions"),
	bot: z.boolean().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export interface ContactInformation {
	name: string,
	street: string,
	city: string,
	country: string,
	mail: string,
}

export interface SocialLink {
	icon: IconType
	href: string,
	title: string,
	username: string,
	description: string,
}

export type ExperienceLevel =
	| "Beginner"        // Basic knowledge, can write simple programs/scripts
	| "Proficient"      // Comfortable with core concepts, can build applications
	| "Experienced"     // Strong knowledge, can architect solutions and build complex systems
	| "Advanced"        // Deep understanding of language internals and best practices
	| "Expert";         // Mastery level, can optimize and teach others

export type SkillType =
	| "language"
	| "framework";

export interface SkillColor {
	background: string,
	text: string,
}

export interface Skill {
	type: SkillType,
	name: string,
	experience: ExperienceLevel,
	description: string,
	color: SkillColor,
}
