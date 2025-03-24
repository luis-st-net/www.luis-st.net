"use client";

import * as Ui from "@/lib/components/ui/";
import React from "react";
import ContentPane from "@/lib/components/content-pane";
import { ControllerFieldState, ControllerRenderProps, useForm, UseFormStateReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, ContactFormValues } from "@/lib/types";
import { sendContactEmail } from "./actions";

type FieldRendererProps<T extends keyof ContactFormValues = keyof ContactFormValues> = {
	field: ControllerRenderProps<ContactFormValues, T>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<ContactFormValues>;
};

export default function () {
	const { toast } = useToast();
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
			acceptTerms: false,
			bot: true,
		},
	});
	
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	
	async function onSubmit(data: ContactFormValues) {
		setIsSubmitting(true);
		try {
			const result = await sendContactEmail(data);
			
			if (result.success) {
				toast({
					title: "Success",
					description: result.message,
				});
				form.reset();
			} else {
				toast({
					title: "Error",
					description: result.message,
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: "Error",
				description: "An unexpected error occurred",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	}
	
	return (
		<ContentPane className="w-1/3">
			<div className="m-4">
				<h1 className="text-4xl mb-4">
					Contact Us
				</h1>
				<Ui.Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<Ui.FormField control={form.control} name="name" render={NameFormFieldRenderer}/>
						
						<Ui.FormField control={form.control} name="email" render={MailFormFieldRenderer}/>
						
						<Ui.FormField control={form.control} name="subject" render={SubjectFormFieldRenderer}/>
						
						<Ui.FormField control={form.control} name="message" render={MessageFormFieldRenderer}/>
						
						<Ui.FormField control={form.control} name="acceptTerms" render={AcceptTermsFormFieldRenderer}/>
						
						<Ui.FormField control={form.control} name="bot" render={BotFieldRenderer}/>
						
						<Ui.Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Ui.Button>
					</form>
				</Ui.Form>
			</div>
		</ContentPane>
	);
}

function NameFormFieldRenderer(
	{ field, fieldState, formState }: FieldRendererProps<"name">,
) {
	return (
		<FormFieldRenderer label="Name">
			<Ui.Input placeholder="Your name" {...field}/>
		</FormFieldRenderer>
	);
}

function MailFormFieldRenderer(
	{ field, fieldState, formState }: FieldRendererProps<"email">,
) {
	return (
		<FormFieldRenderer label="Email">
			<Ui.Input type="email" placeholder="your.email@example.com" {...field} />
		</FormFieldRenderer>
	);
}

function SubjectFormFieldRenderer(
	{ field, fieldState, formState }: FieldRendererProps<"subject">,
) {
	return (
		<FormFieldRenderer label="Subject">
			<Ui.Input placeholder="Message subject" {...field} />
		</FormFieldRenderer>
	);
}

function MessageFormFieldRenderer(
	{ field, fieldState, formState }: FieldRendererProps<"message">,
) {
	return (
		<FormFieldRenderer label="Message">
			<Ui.Textarea placeholder="Your message" className="min-h-32" {...field}/>
		</FormFieldRenderer>
	);
}

function AcceptTermsFormFieldRenderer(
	{ field, fieldState, formState }: FieldRendererProps<"acceptTerms">,
) {
	return (
		<Ui.FormItem>
			<div className="flex flex-row items-start space-x-3 space-y-0">
				<Ui.FormControl>
					<Ui.Checkbox
						checked={field.value}
						onCheckedChange={field.onChange}
						name={field.name}
						ref={field.ref}
						onBlur={field.onBlur}
					/>
				</Ui.FormControl>
				<div className="space-y-1 leading-none">
					<Ui.FormLabel>
						I accept that the information provided will be used to contact me.
					</Ui.FormLabel>
				</div>
			</div>
			<Ui.FormMessage/>
		</Ui.FormItem>
	);
}

function BotFieldRenderer(
	{ field, fieldState, formState }: FieldRendererProps<"bot">,
) {
	return (
		<div>
			<Ui.FormItem>
				<div className="flex flex-row items-start space-x-3 space-y-0">
					<Ui.FormControl>
						<Ui.Checkbox
							checked={field.value}
							onCheckedChange={field.onChange}
							name={field.name}
							ref={field.ref}
							onBlur={field.onBlur}
						/>
					</Ui.FormControl>
					<div className="space-y-1 leading-none">
						<Ui.FormLabel>
							I am a bot, i just want to send spam.
						</Ui.FormLabel>
					</div>
				</div>
			</Ui.FormItem>
		</div>
	);
}

function FormFieldRenderer(
	{ label, children }: { label: string, children: React.ReactNode },
) {
	return (
		<Ui.FormItem>
			<Ui.FormLabel>{label}</Ui.FormLabel>
			<Ui.FormControl>
				{children}
			</Ui.FormControl>
			<Ui.FormMessage/>
		</Ui.FormItem>
	);
}
