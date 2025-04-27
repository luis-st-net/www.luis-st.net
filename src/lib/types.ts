import { z } from "zod";
import type { IconType } from "react-icons";
import { ControllerFieldState, ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

export const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	mail: z.string().email("Invalid mail address"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
	acceptTerms: z.boolean().refine(value => value, "You must accept the contact conditions"),
	bot: z.boolean().optional(),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactFormFieldRendererProps<T extends keyof ContactFormValues = keyof ContactFormValues> = {
	field: ControllerRenderProps<ContactFormValues, T>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<ContactFormValues>;
};

export const verificationFormSchema = z.object({
	verificationToken: z.string(),
	verificationCode: z.string().length(6, "Verification code must be 6 digits"),
});
export type VerificationFormValues = z.infer<typeof verificationFormSchema>;
export type VerificationFormFieldRendererProps<T extends keyof VerificationFormValues = keyof VerificationFormValues> = {
	field: ControllerRenderProps<VerificationFormValues, T>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<VerificationFormValues>;
};

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
	| "framework"
	| "build-system"
	| "development-tool";

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
