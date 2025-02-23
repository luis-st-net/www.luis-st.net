import React from "react";
import * as Ui from "@/lib/components/ui/";
import Sidebar from "@/lib/components/sidebar";

export default function (
	{ children }: { children: React.ReactNode }
) {
	return (
		<Ui.SidebarProvider>
			<Sidebar/>
			<main>
				<Ui.SidebarTrigger/>
				{children}
			</main>
		</Ui.SidebarProvider>
	);
}