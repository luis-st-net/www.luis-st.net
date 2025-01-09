import * as Icons from "lucide-react";

export interface SidebarItem {
	title: string,
	icon: Icons.LucideIcon,
	subItems: SidebarSubItem[]
}

export interface SidebarSubItem {
	title: string,
	url: string,
	icon: Icons.LucideIcon
}
