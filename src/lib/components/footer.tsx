"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utility";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Footer() {
	const { theme, resolvedTheme } = useTheme();
	const currentTheme = theme === "system" ? resolvedTheme : theme;

	const backgroundColor = currentTheme === "light"
		? "rgba(248, 250, 252, 0.8)"
		: "rgba(15, 23, 42, 0.8)";

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.3 }}
			style={{ backgroundColor }}
			className="h-16 flex flex-row items-center justify-between px-4 sm:px-8 backdrop-blur-xl border-t border-white/10"
		>
			<div className="text-sm sm:text-base text-custom-text-primary/80 font-medium">
				© {new Date().getFullYear()}{" "}
				<span className="gradient-text font-bold">Luis Staudt</span>
			</div>
			<div className="flex gap-4 sm:gap-6">
				<PageLink title="Imprint"/>
				<PageLink title="Contact"/>
			</div>
		</motion.div>
	);
}

function PageLink(
	{ title, href, className, ...props }: Omit<React.ComponentProps<typeof Link>, "href"> & { title: string, href?: string },
) {
	return (
		<Link
			href={href ? href : "/" + title.toLowerCase()}
			className={cn(
				"text-sm sm:text-base text-custom-text-primary/80 font-medium",
				"transition-all duration-300 hover:text-custom-light-blue",
				"relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5",
				"after:bg-gradient-to-r after:from-custom-blue after:to-custom-accent-purple",
				"after:transition-all after:duration-300 hover:after:w-full",
				className
			)}
			{...props}
		>
			{title}
		</Link>
	);
}
