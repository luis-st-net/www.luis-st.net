import { NextResponse, NextRequest } from 'next/server'
import { createHash, getCountry, getIp, isCountryBlocked, isIpBlocked, validateHash } from "@/lib/security";
import { isDevelopment } from "@/lib/utility";

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
		let saveIp = request.cookies.get("Save-Ip");
		let saveCountry = request.cookies.get("Save-Country");
		if (await validateHash(saveIp?.value, ip, getExpires(saveIp)) && await validateHash(saveCountry?.value, country, getExpires(saveCountry))) {
			return NextResponse.next();
		}
	}
	const ipWhitelisted = !(await isIpBlocked(ip));
	const countryWhitelisted = !(await isCountryBlocked(country));
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
	let expires = Date.now() + 1000 * 60 * 60 * 24 * 365;
	const response = NextResponse.next();
	response.cookies.set({
		name: "Save-Ip",
		value: await createHash(ip, expires),
		expires: expires
	});
	response.cookies.set({
		name: "Save-Country",
		value: await createHash(country, expires),
		expires: expires
	});
	return response;
}

function getExpires(cookie: any): number | undefined {
	if (!cookie.expires) {
		return undefined;
	}
	if (typeof cookie.expires === "string") {
		return new Date(cookie.expires).getTime();
	}
	if (typeof cookie.expires === "number") {
		return cookie.expires;
	}
	return undefined;
}

export const config = {
	matcher: [
		'/((?!_next|error).*)',
	],
};