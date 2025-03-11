import type { Metadata } from "next";
import * as Ui from "@/lib/components/ui/";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
	title: "Website of Luis Staudt",
	description: "This is my personal website, used to showcase my projects and skills.",
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
			{children}
		</Ui.ThemeProvider>
		</body>
		</html>
	);
}
