import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { DatabaseCache } from "@/lib/DatabaseCache";

const ipBlockedCache: DatabaseCache<string, null> = new DatabaseCache<string, null>(async () => {
	return new Map((await prisma.ipBlockList.findMany()).map((entry) => [entry.ip, null]));
});

const countryWhitelistCache: DatabaseCache<string, null> = new DatabaseCache<string, null>(async () => {
	return new Map((await prisma.countryWhitelist.findMany()).map((entry) => [entry.countryCode, null]));
});

export function fetchDatabase() {
	ipBlockedCache.fetchDatabase();
	countryWhitelistCache.fetchDatabase();
}

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

export function isIpBlocked(ip: string): boolean {
	return ipBlockedCache.has(ip);
}

export function isCountryBlocked(country: string): boolean {
	return !countryWhitelistCache.has(country);
}

export async function createHash(salt: string, value: string, expires: number): Promise<string> {
	const encoder = new TextEncoder();
	const data = encoder.encode(`${salt}${value}${expires}`);
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function validateHash(hash: string | null, salt: string, value: string, expires: number | null): Promise<boolean> {
	if (!expires || !hash) {
		return false;
	}
	return hash === await createHash(salt, value, expires);
}
