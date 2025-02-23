"use client";

import * as Ui from "@/lib/components/ui/";
import * as Icons from "lucide-react";
import Link from "next/link";
import React from "react";
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

export default function Sidebar() {
	return <Ui.Sidebar collapsible="icon">
		<Ui.SidebarContent>
			<SidebarGroup>
				<Ui.SidebarMenu>
					<CollapsibleSidebarMenuItem item={overview}/>
					<CollapsibleSidebarMenuItem item={test}/>
				</Ui.SidebarMenu>
			</SidebarGroup>
		</Ui.SidebarContent>
	</Ui.Sidebar>;
}

function SidebarGroup(
	{ children }: { children: React.ReactNode },
) {
	return <Ui.SidebarGroup>
		<Ui.SidebarGroupContent>
			{children}
		</Ui.SidebarGroupContent>
	</Ui.SidebarGroup>;
}

function CollapsibleSidebarMenuItem(
	{ item }: { item: SidebarItem },
) {
	return <Ui.Collapsible className="group/collapsible">
		<Ui.SidebarMenuItem>
			<Ui.CollapsibleTrigger asChild>
				<Ui.SidebarMenuButton>
					<item.icon/>
					<span>{item.title}</span>
					<Icons.ChevronRight className="ml-auto duration-400 ease group-data-[state=open]/collapsible:rotate-90"/>
				</Ui.SidebarMenuButton>
			</Ui.CollapsibleTrigger>
			<Ui.CollapsibleContent>
				<Ui.SidebarMenuSub>
					{item.subItems.map(subItem => (
						<Ui.SidebarMenuSubItem key={subItem.title} className="block">
							<Ui.SidebarMenuSubButton asChild>
								<Link href={subItem.url}>
									<subItem.icon/>
									<span>{subItem.title}</span>
								</Link>
							</Ui.SidebarMenuSubButton>
						</Ui.SidebarMenuSubItem>
					))}
				</Ui.SidebarMenuSub>
			</Ui.CollapsibleContent>
		</Ui.SidebarMenuItem>
	</Ui.Collapsible>;
}
