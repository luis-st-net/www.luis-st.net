import { NextResponse, NextRequest } from 'next/server'
import { createHash, getCountry, getIp, isCountryBlocked, isIpBlocked, validateHash } from "@/lib/security";
import { isDevelopment } from "@/lib/utility";
import { asCookie, Cookie } from "@/lib/types";

export async function middleware(request: NextRequest) {
	console.log("Middleware");
	const ip = getIp(request);
	let country = getCountry(request);
	if (!ip) {
		return redirect(request, "/error/missing-ip");
	}
	if (isDevelopment() && !country) {
		country = "DE";
		console.log("Development mode: Using country code DE");
	}
	if (!country) {
		return redirect(request, "/error/missing-country");
	}
	if (request.cookies.has("Save-Ip") && request.cookies.has("Save-Country")) {
		const salt = process.env.HASH_SALT as string;
		const saveIp = asCookie(request.cookies.get("Save-Ip"));
		const saveCountry = asCookie(request.cookies.get("Save-Country"));
		if (await validateCookie(saveIp, ip) && await validateCookie(saveCountry, country)) {
			return NextResponse.next();
		}
	}
	const ipWhitelisted = isIpBlocked(ip);
	const countryWhitelisted = isCountryBlocked(country);
	if (!ipWhitelisted || !countryWhitelisted) {
		return redirect(request, "/error/forbidden");
	}
	return createSafeResponse(ip, country);
}

function redirect(request: NextRequest, redirectUrl: string) {
	const url = request.nextUrl.clone();
	url.pathname = redirectUrl;
	return NextResponse.redirect(url);
}

async function createSafeResponse(ip: string, country: string) {
	const expires = Date.now() + 1000 * 60 * 60 * 24 * 365;
	const salt = process.env.HASH_SALT as string;
	const response = NextResponse.next();
	response.cookies.set({
		name: "Save-Ip",
		value: await createHash(salt, ip, expires),
		expires: expires
	});
	response.cookies.set({
		name: "Save-Country",
		value: await createHash(salt, country, expires),
		expires: expires
	});
	return response;
}

function validateCookie(cookie: Cookie | null, value: string): Promise<boolean> {
	if (!cookie) {
		return Promise.resolve(false);
	}
	return validateHash(cookie.value, process.env.HASH_SALT as string, value, cookie.expires);
}

export const config = {
	matcher: [
		'/((?!_next|error).*)',
	],
};