import type { Metadata } from "next";
import * as Ui from "@/lib/components/ui/";
import "./globals.css";
import React from "react";
import NavigationBar from "@/lib/components/navigation-bar";

export const metadata: Metadata = {
	title: "Website of Luis Staudt",
	description: "This is my personal portfolio website.",
	generator: "Next.js",
	creator: "Luis Staudt",
	publisher: "Luis Staudt",
};

export default function (
	{ children }: { children: React.ReactNode },
) {
	return (
		<html lang="en" suppressHydrationWarning>
		<body>
		<Ui.ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			<div className="flex flex-col h-screen w-full">
				<NavigationBar/>
				<main className="flex flex-col items-center flex-1 overflow-hidden overflow-y-auto">
					{children}
				</main>
			</div>
			<Ui.ToasterProvider/>
		</Ui.ThemeProvider>
		</body>
		</html>
	);
}
