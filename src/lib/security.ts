import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export function getIp(request: NextRequest): string | null {
	let headers: Headers = request.headers;
	if (headers.has("cf-connecting-ip")) {
		return headers.get("cf-connecting-ip");
	}
	if (headers.has("x-forwarded-for")) {
		let ip: string = headers.get("x-forwarded-for") as string;
		return ip.split(",")[0];
	}
	return null;
}

export function getCountry(request: NextRequest): string | null {
	let headers: Headers = request.headers;
	if (headers.has("cf-ipcountry")) {
		return headers.get("cf-ipcountry");
	}
	return null;
}

export async function isIpBlocked(ip: string): Promise<boolean> {
	return prisma.ipBlockList.findUnique({
		where: {
			ip: ip
		}
	}).then((result) => !!result);
}

export async function isCountryBlocked(country: string): Promise<boolean> {
	return prisma.countryWhitelist.findUnique({
		where: {
			countryCode: country
		}
	}).then((result) => !result);
}

export async function createHash(value: string, expires: number): Promise<string> {
	const encoder = new TextEncoder();
	const data = encoder.encode(value + expires);
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function validateHash(hash: string | undefined, value: string, expires: number | undefined): Promise<boolean> {
	if (!expires || !hash) {
		return false;
	}
	return hash === await createHash(value, expires);
}
