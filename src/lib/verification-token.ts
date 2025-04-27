import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SECRET || "contact-form-secret";
const TOKEN_EXPIRY = "15m";

type VerificationPayload = {
	mail: string;
	code: string;
	formData: Record<string, any>;
};

export function generateVerificationToken(payload: VerificationPayload): string {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

export function verifyToken(token: string): VerificationPayload | null {
	try {
		return jwt.verify(token, JWT_SECRET) as VerificationPayload;
	} catch (error) {
		return null;
	}
}

export function generateVerificationCode(): string {
	return Math.floor(100000 + Math.random() * 900000).toString();
}
