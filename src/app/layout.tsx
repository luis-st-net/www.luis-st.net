import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
	title: "Website of Luis Staudt",
	description: "This is my personal website, used to showcase my projects and skills.",
	generator: "Next.js",
	creator: "Luis Staudt",
	publisher: "Luis Staudt",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
		<body>
		{children}
		</body>
		</html>
	);
}
