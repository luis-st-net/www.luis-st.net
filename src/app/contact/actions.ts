"use server";

import { contactFormSchema, ContactFormValues, verificationFormSchema, VerificationFormValues } from "@/lib/types";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { generateVerificationCode, generateVerificationToken, verifyToken } from "@/lib/verification-token";

const contactTransporter = nodemailer.createTransport({
	host: process.env.CONTACT_SMTP_HOST,
	port: Number(process.env.CONTACT_SMTP_PORT),
	secure: process.env.CONTACT_SMTP_SECURE === "true",
	auth: {
		user: process.env.CONTACT_SMTP_USER,
		pass: process.env.CONTACT_SMTP_PASSWORD,
	},
});
const verificationTransporter = nodemailer.createTransport({
	host: process.env.VERIFICATION_SMTP_HOST,
	port: Number(process.env.VERIFICATION_SMTP_PORT),
	secure: process.env.VERIFICATION_SMTP_SECURE === "true",
	auth: {
		user: process.env.VERIFICATION_SMTP_USER,
		pass: process.env.VERIFICATION_SMTP_PASSWORD,
	},
});

export async function initiateMailVerification(contactData: ContactFormValues) {
	try {
		const result = contactFormSchema.safeParse(contactData);
		if (!result.success) {
			return { success: false, verificationToken: "", message: "Form validation failed" };
		}
		if (contactData.bot === true) {
			return { success: false, verificationToken: "", message: "Message not sent. Please uncheck the 'I am a bot' field if you're human" };
		}
		
		const verificationCode = generateVerificationCode();
		const token = generateVerificationToken({
			mail: contactData.mail,
			code: verificationCode,
			formData: contactData,
		});
		const mailOptions: Mail.Options = {
			from: process.env.VERIFICATION_SMTP_USER,
			to: contactData.mail,
			subject: "Contact Verification Code is " + verificationCode,
			text: `Your verification code is: ${verificationCode}\nThis code will expire in 15 minutes.`,
			html: `
		        <div>
		          <h2>Mail Verification</h2>
		          <p>Your verification code is: <strong>${verificationCode}</strong></p>
		          <p>This code will expire in 15 minutes.</p>
		        </div>
		      `,
		};
		
		await verificationTransporter.sendMail(mailOptions);
		
		return {
			success: true,
			verificationToken: token,
			message: "Verification code sent to your mail",
		};
		
	} catch (error) {
		console.error("Error initiating verification:", error);
		return {
			success: false,
			verificationToken: "",
			message: "Failed to send verification mail",
		};
	}
}

export async function verifyAndSendContactMail(verificationData: VerificationFormValues) {
	try {
		const result = verificationFormSchema.safeParse(verificationData);
		if (!result.success) {
			return { success: false, message: "Form validation failed" };
		}
		
		const payload = verifyToken(verificationData.verificationToken);
		if (!payload) {
			return { success: false, message: "Verification failed. Token expired or invalid." };
		}
		if (payload.code !== verificationData.verificationCode) {
			return { success: false, message: "Invalid verification code" };
		}
		
		const data = payload.formData as ContactFormValues;
		const mailOptions: Mail.Options = {
			from: `"${data.name} via Contact Form" <${process.env.CONTACT_SMTP_USER}>`,
			to: process.env.CONTACT_SMTP_USER,
			replyTo: data.mail,
			subject: `Contact Form: ${data.subject}`,
			text: `Name: ${data.name}\nMail: ${data.mail}\n\n${data.message}`,
			html: `
		        <div>
		          <p><strong>Name:</strong> ${data.name}</p>
		          <p><strong>Mail:</strong> ${data.mail}</p>
		          <p><strong>Subject:</strong> ${data.subject}</p>
		          <p>${data.message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br/>")}</p>
		        </div>
		      `,
		};
		
		await contactTransporter.sendMail(mailOptions);
		
		return {
			success: true,
			message: "Mail sent successfully",
		};
	} catch (error) {
		console.error("Error sending mail:", error);
		return {
			success: false,
			message: "Failed to send mail",
		};
	}
}
