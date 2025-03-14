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
			<div className="flex flex-col h-screen w-full">
				<NavigationBar/>
				<main className="flex flex-col items-center flex-1 ml-4 mr-4 overflow-hidden overflow-y-auto">
					{children}
				</main>
			</div>
		</Ui.SidebarProvider>
	);
}