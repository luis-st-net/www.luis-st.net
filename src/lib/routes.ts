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

export const base: Route = {
	title: "Home",
	icon: Icons.Home,
	route: "/",
	subRoutes: [
		websites,
		projects,
		mods,
		services,
	],
};

//region Helper functions
function getRouteString(route: string): string {
	if (!route.startsWith("/")) {
		return "/" + route;
	}
	return route;
}

function searchRoute(path: string[], route: Route): Route | undefined {
	if (path.length === 0) {
		return undefined;
	}
	const routeString = getRouteString(path[0]);
	if (routeString === route.route && path.length === 1) {
		return route;
	}
	for (const subRoute of route.subRoutes) {
		const foundRoute = searchRoute(path.slice(1), subRoute);
		if (foundRoute) {
			return foundRoute;
		}
	}
	return undefined;
}

//endregion

/**
 * Returns the base route for the given path.<br>
 * The base route is the first route in the path (either / or a sub-route of /).<br>
 */
export function getBaseRoute(path: string[]): Route {
	if (path.length === 0) {
		return base;
	}
	const routeString = getRouteString(path[0]);
	if (routeString === "/") {
		return base;
	}
	for (const subRoute of base.subRoutes) {
		if (routeString === subRoute.route) {
			return subRoute;
		}
	}
	throw new Error("Base route not found, missing reference to '/" + path.join("/") + "' in root route");
}

/**
 * Returns the route for the given path.<br>
 * The route is the route that matches the path.<br>
 */
export function getRoute(path: string[]): Route {
	if (path.length === 0) {
		return base;
	}
	const routeString = getRouteString(path[0]);
	if (routeString === "/") {
		return base;
	}
	for (const subRoute of base.subRoutes) {
		const foundRoute = searchRoute(path, subRoute);
		if (foundRoute) {
			return foundRoute;
		}
	}
	throw new Error("Route is not found, missing reference to '/" + path.join("/") + "' in its parent route");
}

/**
 * Returns the parent route for the given path.<br>
 * The parent route is the route that is one level up in the path.<br>
 */
export function getParentRoute(path: string[]): Route {
	return getRoute(path.slice(0, path.length - 1));
}

/**
 * Returns the previous routes for the given path.<br>
 * The previous routes are the routes that are one level up in the path.<br>
 * The result is an array of routes containing all previous routes (excluding the current route).<br>
 */
export function getPreviousRoutes(path: string[]): Route[] {
	let routes = [];
	for (let i = 0; i < path.length - 1; i++) {
		routes.push(getRoute(path.slice(0, i + 1)));
	}
	if (path.length !== 0) {
		routes.unshift(base);
	}
	return routes;
}

/**
 * Returns the parallel routes for the given path.<br>
 * The parallel routes are the routes that are at the same level as the given path.<br>
 * The result is an array of routes containing all parallel routes (including the current route).<br>
 */
export function getParallelRoutes(path: string[]): Route[] {
	if (path.length === 0) {
		return [];
	}
	if (path.length === 1 && getRouteString(path[0]) === "/") {
		return [];
	}
	const parentRoute = getParentRoute(path);
	if (parentRoute) {
		return parentRoute.subRoutes;
	}
	throw new Error("Route is not configured correctly: /" + path.join("/"));
}
