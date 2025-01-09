import React from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/lib/components/ui/sidebar";
import ConfiguredSidebar from "@/lib/components/sidebar";

export default function (
	{ children }: { children: React.ReactNode }
) {
	return (
		<SidebarProvider>
			<ConfiguredSidebar/>
			<main>
				<SidebarTrigger/>
				{children}
			</main>
		</SidebarProvider>
	);
}