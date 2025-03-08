import * as Icons from "lucide-react";

export interface SidebarItem {
	title: string,
	icon: Icons.LucideIcon,
	urlPrefix: string,
	subItems: SidebarSubItem[],
}

export interface SidebarSubItem {
	title: string,
	url: string,
}
