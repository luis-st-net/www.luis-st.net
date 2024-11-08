import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export interface Cookie {
	value: string;
	expires: number;
}

export function asCookie(c: any): Cookie | null {
	if (!c) {
		return null;
	}
	return {
		value: c.value,
		expires: c.expires ? new Date(c.expires).getTime() : 0
	};
}
