import * as Icons from "lucide-react";

export interface Route {
	title: string,
	icon?: Icons.LucideIcon,
	route: string,
	subRoutes: Route[],
}
