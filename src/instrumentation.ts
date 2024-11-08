import { fetchDatabase } from "@/lib/security";

export function register() {
	console.log("Registering instrumentation");
	fetchDatabase();
}