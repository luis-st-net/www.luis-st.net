"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utility";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.3 }}
			className="h-16 flex flex-row items-center justify-between px-4 sm:px-8 glass border-t border-white/10"
		>
			<div className="text-sm sm:text-base text-custom-white-primary/80 font-medium">
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
				"text-sm sm:text-base text-custom-white-primary/80 font-medium",
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
