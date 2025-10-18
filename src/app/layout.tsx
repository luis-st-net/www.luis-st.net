import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavigationBar from "@/lib/components/navigation-bar";
import Footer from "@/lib/components/footer";
import AnimatedBackground from "@/lib/components/animated-background";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/lib/components/custom";

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
		<body className="min-w-64">
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			<ToastProvider>
				<AnimatedBackground />
				<div className="flex flex-col h-screen w-full">
					<NavigationBar/>
					<main className="flex flex-col items-center flex-1 overflow-hidden overflow-y-auto pt-20">
						{children}
					</main>
					<Footer/>
				</div>
			</ToastProvider>
		</ThemeProvider>
		</body>
		</html>
	);
}
