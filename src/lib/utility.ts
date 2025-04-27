import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isProduction(): boolean {
	return process.env.NODE_ENV === "production";
}

export function isDevelopment(): boolean {
	return process.env.NODE_ENV === "development";
}

export function getAgeFromBirthdate(): number {
	const birthdate = new Date(2004, 3, 11);
	const today = new Date();
	
	let years = today.getFullYear() - birthdate.getFullYear();
	if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
		years--;
	}
	return years;
}
