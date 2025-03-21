"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/types";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { isDevelopment } from "@/lib/utility";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: process.env.SMTP_SECURE === "true",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD,
	},
});

export async function sendContactEmail(data: ContactFormValues) {
	if (isDevelopment()) {
		return {
			success: true,
			message: "Email sent successfully, mail delivery simulated in development",
		}
	}
	try {
		const result = contactFormSchema.safeParse(data);
		
		if (!result.success) {
			return {
				success: false,
				message: "Form validation failed",
			};
		}
		
		const mailOptions: Mail.Options = {
			from: `${data.name} via <${process.env.SMTP_USER}>`,
			to: process.env.SMTP_USER,
			replyTo: data.email,
			subject: `Contact Form: ${data.subject}`,
			text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
			html: `
        <div>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <br/>
          <p>${data.message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
		};
		
		await transporter.sendMail(mailOptions);
		
		return {
			success: true,
			message: "Email sent successfully",
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Failed to send email",
		};
	}
}