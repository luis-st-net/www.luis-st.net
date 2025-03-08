import { Route } from "@/lib/types";
import * as Icons from "lucide-react";

export const websites: Route = {
	title: "Websites",
	icon: Icons.Earth,
	route: "/websites",
	subRoutes: [
		{ title: "My Website", route: "/my-website", subRoutes: [] },
	],
};
export const projects: Route = {
	title: "Projects",
	icon: Icons.Folder,
	route: "/projects",
	subRoutes: [
		{ title: "LUtils", route: "/lutils", subRoutes: [] },
		{ title: "Bytecode Manipulation", route: "/bytecode-manipulation", subRoutes: [] },
		{ title: "Windows Utility", route: "/windows-utility", subRoutes: [] },
		{ title: "Raspberry Sensor", route: "/raspberry-sensor", subRoutes: [] },
		{ title: "LNetCore", route: "/lnetcore", subRoutes: [] },
		{ title: "FxUtils", route: "/fxutils", subRoutes: [] },
		{ title: "LGames", route: "/lgames", subRoutes: [] },
		{ title: "Wiki-Builder", route: "/wiki-builder", subRoutes: [] },
	],
};
export const mods: Route = {
	title: "Mods",
	icon: Icons.Settings,
	route: "/mods",
	subRoutes: [
		{ title: "XBackpack", route: "/xbackpack", subRoutes: [] },
		{ title: "XOres", route: "/xores", subRoutes: [] },
		{ title: "XSurvive", route: "/xsurvive", subRoutes: [] },
		{ title: "XGeneration", route: "/xgeneration", subRoutes: [] },
		{ title: "XChallenges", route: "/xchallenges", subRoutes: [] },
	],
};
export const services: Route = {
	title: "Services",
	icon: Icons.Server,
	route: "/services",
	subRoutes: [
		{ title: "Artifactory", route: "/artifactory", subRoutes: [] },
		{ title: "BitWarden", route: "/bitwarden", subRoutes: [] },
		{ title: "Database", route: "/database", subRoutes: [] },
		{ title: "Docker", route: "/docker", subRoutes: [] },
		{ title: "Mail Server", route: "/mail-server", subRoutes: [] },
		{ title: "Mail Web Ui", route: "/mail-web-ui", subRoutes: [] },
	],
};

