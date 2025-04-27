// src/app/contact/actions.ts
"use server";

import { contactFormSchema, ContactFormValues, VerificationFormValues } from "@/lib/types";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { generateVerificationCode, generateVerificationToken, verifyToken } from "@/lib/verification-token";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: process.env.SMTP_SECURE === "true",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD,
	},
});

export async function initiateContactVerification(data: ContactFormValues) {
	try {
		const result = contactFormSchema.safeParse(data);
		
		if (!result.success) {
			return { success: false, verificationToken: "", message: "Form validation failed" };
		}
		if (data.bot === true) {
			return { success: false, verificationToken: "", message: "Message not sent. Please uncheck the 'I am a bot' field if you're human" };
		}
		
		const verificationCode = generateVerificationCode();
		
		const token = generateVerificationToken({
			email: data.email,
			code: verificationCode,
			formData: data,
		});
		
		const mailOptions: Mail.Options = {
			from: process.env.SMTP_USER,
			to: data.email,
			subject: "Verification Code for luis-st.net Contact Form",
			text: `Your verification code is: ${verificationCode}\nThis code will expire in 15 minutes.`,
			html: `
		        <div>
		          <h2>Email Verification</h2>
		          <p>Your verification code is: <strong>${verificationCode}</strong></p>
		          <p>This code will expire in 15 minutes.</p>
		        </div>
		      `,
		};
		
		await transporter.sendMail(mailOptions);
		
		return { success: true, verificationToken: token, message: "Verification code sent to your email" };
		
	} catch (error) {
		console.error("Error initiating verification:", error);
		return { success: false, verificationToken: "", message: "Failed to send verification email" };
	}
}

export async function verifyAndSendContactEmail(verificationData: VerificationFormValues) {
	try {
		const { verificationToken, verificationCode } = verificationData;
		
		const payload = verifyToken(verificationToken);
		if (!payload) {
			return { success: false, message: "Verification failed. Token expired or invalid." };
		}
		if (payload.code !== verificationCode) {
			return { success: false, message: "Invalid verification code" };
		}
		
		const data = payload.formData as ContactFormValues;
		const mailOptions: Mail.Options = {
			from: `${data.name} via Contact Form`,
			to: process.env.SMTP_USER,
			replyTo: data.email,
			subject: `Contact Form: ${data.subject}`,
			text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
			html: `
		        <div>
		          <p><strong>Name:</strong> ${data.name}</p>
		          <p><strong>Email:</strong> ${data.email}</p>
		          <p><strong>Subject:</strong> ${data.subject}</p>
		          <p>${data.message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br/>")}</p>
		        </div>
		      `,
		};
		
		await transporter.sendMail(mailOptions);
		
		return { success: true, message: "Email sent successfully" };
		
	} catch (error) {
		console.error("Error sending email:", error);
		return { success: false, message: "Failed to send email" };
	}
}
