"use client";

import * as Ui from "@/lib/components/ui";
import React from "react";
import ContentPane from "@/lib/components/content-pane";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/lib/hooks/use-toast";
import { ContactFormFieldRendererProps, contactFormSchema, ContactFormValues, VerificationFormFieldRendererProps, verificationFormSchema, VerificationFormValues } from "@/lib/types";
import { initiateMailVerification, verifyAndSendContactMail } from "./actions";

export default function () {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [verificationState, setVerificationState] = React.useState({
		isVerifying: false,
		token: "",
	});
	
	const contactForm = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			mail: "",
			subject: "",
			message: "",
			acceptTerms: false,
			bot: true,
		},
	});
	
	const verificationForm = useForm<VerificationFormValues>({
		resolver: zodResolver(verificationFormSchema),
		defaultValues: {
			verificationToken: "",
			verificationCode: "",
		},
	});
	
	async function onContactSubmit(data: ContactFormValues) {
		setIsSubmitting(true);
		try {
			const result = await initiateMailVerification(data);
			
			if (result.success) {
				toast({
					title: "Verification Mail Sent",
					description: result.message,
				});
				
				verificationForm.reset({
					verificationToken: "",
					verificationCode: "",
				});
				
				verificationForm.setValue("verificationToken", result.verificationToken);
				setVerificationState({
					isVerifying: true,
					token: result.verificationToken,
				});
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
	
	async function onVerificationSubmit(data: VerificationFormValues) {
		setIsSubmitting(true);
		try {
			const result = await verifyAndSendContactMail(data);
			
			if (result.success) {
				toast({
					title: "Success",
					description: result.message,
				});
				
				setVerificationState({ isVerifying: false, token: "" });
				contactForm.reset();
				verificationForm.reset();
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
		<ContentPane defaultColor={true} className="w-4/5 lg:w-2/3 2xl:w-1/3">
			<div className="m-4">
				<h2 className="text-4xl mb-4">
					Contact Us
				</h2>
				
				{!verificationState.isVerifying ? (
					<Ui.Form {...contactForm}>
						<form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
							<Ui.FormField control={contactForm.control} name="name" render={NameFormFieldRenderer}/>
							
							<Ui.FormField control={contactForm.control} name="mail" render={MailFormFieldRenderer}/>
							
							<Ui.FormField control={contactForm.control} name="subject" render={SubjectFormFieldRenderer}/>
							
							<Ui.FormField control={contactForm.control} name="message" render={MessageFormFieldRenderer}/>
							
							<Ui.FormField control={contactForm.control} name="acceptTerms" render={AcceptTermsFormFieldRenderer}/>
							
							<Ui.FormField control={contactForm.control} name="bot" render={BotFieldRenderer}/>
							
							<Ui.Button type="submit" className="w-full" disabled={isSubmitting}>
								{isSubmitting ? "Sending verification..." : "Send verification code"}
							</Ui.Button>
						</form>
					</Ui.Form>
				) : (
					<Ui.Form key={`verification-form-${verificationState.token}`} {...verificationForm}>
						<form onSubmit={verificationForm.handleSubmit(onVerificationSubmit)} className="space-y-6">
							<Ui.FormField control={verificationForm.control} name="verificationCode" render={VerificationCodeFormFieldRenderer}/>
							
							<Ui.Button type="submit" className="w-full" disabled={isSubmitting}>
								{isSubmitting ? "Sending..." : "Verify & Send Message"}
							</Ui.Button>
						</form>
					</Ui.Form>
				)}
			</div>
		</ContentPane>
	);
}

//region Field renders
function NameFormFieldRenderer(
	{ field }: ContactFormFieldRendererProps<"name">,
) {
	return (
		<FormFieldRenderer label="Name">
			<Ui.Input placeholder="Your name" {...field}/>
		</FormFieldRenderer>
	);
}

function MailFormFieldRenderer(
	{ field }: ContactFormFieldRendererProps<"mail">,
) {
	return (
		<FormFieldRenderer label="Mail">
			<Ui.Input type="email" placeholder="mail@example.com" {...field} />
		</FormFieldRenderer>
	);
}

function SubjectFormFieldRenderer(
	{ field }: ContactFormFieldRendererProps<"subject">,
) {
	return (
		<FormFieldRenderer label="Subject">
			<Ui.Input placeholder="Message subject" {...field} />
		</FormFieldRenderer>
	);
}

function MessageFormFieldRenderer(
	{ field }: ContactFormFieldRendererProps<"message">,
) {
	return (
		<FormFieldRenderer label="Message">
			<Ui.Textarea placeholder="Your message" className="min-h-32" {...field}/>
		</FormFieldRenderer>
	);
}

function AcceptTermsFormFieldRenderer(
	{ field }: ContactFormFieldRendererProps<"acceptTerms">,
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
	{ field }: ContactFormFieldRendererProps<"bot">,
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

function VerificationCodeFormFieldRenderer(
	{ field }: VerificationFormFieldRendererProps<"verificationCode">,
) {
	return (
		<Ui.FormItem>
			<Ui.FormLabel>
				Verification Code
			</Ui.FormLabel>
			<Ui.FormControl>
				<Ui.InputOTP maxLength={6} autoComplete="off" {...field}>
					<Ui.InputOTPGroup>
						<Ui.InputOTPSlot index={0} className="bg-background"/>
						<Ui.InputOTPSlot index={1} className="bg-background"/>
						<Ui.InputOTPSlot index={2} className="bg-background"/>
						<Ui.InputOTPSlot index={3} className="bg-background"/>
						<Ui.InputOTPSlot index={4} className="bg-background"/>
						<Ui.InputOTPSlot index={5} className="bg-background"/>
					</Ui.InputOTPGroup>
				</Ui.InputOTP>
			</Ui.FormControl>
			<Ui.FormDescription>
				Please enter the verification code sent to your mail.
			</Ui.FormDescription>
			<Ui.FormMessage/>
		</Ui.FormItem>
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

//endregion
