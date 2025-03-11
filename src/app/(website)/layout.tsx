import React from "react";
import * as Ui from "@/lib/components/ui/";
import Sidebar from "@/lib/components/sidebar";
import NavigationBar from "@/lib/components/navigation-bar";

export default function (
	{ children }: { children: React.ReactNode }
) {
	return (
		<Ui.SidebarProvider>
			<Sidebar/>
			<div className="flex flex-col w-full h-full">
				<NavigationBar/>
				<main>
					{children}
				</main>
			</div>
		</Ui.SidebarProvider>
	);
}