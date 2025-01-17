"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "@/lib/components/ui/sidebar";
import * as Icons from "lucide-react";
import Link from "next/link";
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/lib/components/ui/collapsible";
import { SidebarItem } from "@/lib/types/ui";

const overview: SidebarItem = {
	title: "Overview",
	icon: Icons.Home,
	subItems: [
		{ title: "Home", url: "#", icon: Icons.Home },
		{ title: "Inbox", url: "#", icon: Icons.Inbox },
		{ title: "Calendar", url: "#", icon: Icons.Calendar },
		{ title: "Search", url: "#", icon: Icons.Search },
		{ title: "Settings", url: "#", icon: Icons.Settings },
	],
};
const test: SidebarItem = {
	title: "Test",
	icon: Icons.Home,
	subItems: [
		{ title: "Home", url: "#", icon: Icons.Home },
		{ title: "Inbox", url: "#", icon: Icons.Inbox },
		{ title: "Calendar", url: "#", icon: Icons.Calendar },
		{ title: "Search", url: "#", icon: Icons.Search },
		{ title: "Settings", url: "#", icon: Icons.Settings },
	],
};

export default function ConfiguredSidebar() {
	return <Sidebar collapsible="icon">
		<SidebarContent>
			<ConfiguredSidebarGroup groupTitle="Application-Collapsible">
				<SidebarMenu>
					<ConfiguredSidebarMenuItem item={overview}/>
					<ConfiguredSidebarMenuItem item={test}/>
				</SidebarMenu>
			</ConfiguredSidebarGroup>
		</SidebarContent>
	</Sidebar>;
}

function ConfiguredSidebarGroup(
	{ groupTitle, children }: { groupTitle: string, children: React.ReactNode },
) {
	return <SidebarGroup>
		<SidebarGroupContent>
			{children}
		</SidebarGroupContent>
	</SidebarGroup>;
}

function ConfiguredSidebarMenuItem(
	{ item }: { item: SidebarItem },
) {
	return <Collapsible className="group/collapsible">
		<SidebarMenuItem>
			<CollapsibleTrigger asChild>
				<SidebarMenuButton>
					<item.icon/>
					<span>{item.title}</span>
					<Icons.ChevronRight className="ml-auto duration-400 ease group-data-[state=open]/collapsible:rotate-90"/>
				</SidebarMenuButton>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<SidebarMenuSub>
					{item.subItems.map(subItem => (
						<SidebarMenuSubItem key={subItem.title} className="block">
							<SidebarMenuSubButton asChild>
								<Link href={subItem.url}>
									<subItem.icon/>
									<span>{subItem.title}</span>
								</Link>
							</SidebarMenuSubButton>
						</SidebarMenuSubItem>
					))}
				</SidebarMenuSub>
			</CollapsibleContent>
		</SidebarMenuItem>
	</Collapsible>;
}
