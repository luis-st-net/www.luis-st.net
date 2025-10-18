"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/lib/components/custom";

import { cn } from "@/lib/utility";

export default function NavigationBar() {
	return (
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="fixed top-0 left-0 right-0 z-50 h-20 flex flex-row items-center p-2 glass border-b border-white/10 sm:p-4 backdrop-blur-xl"
		>
			{/* Subtle gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-custom-blue/5 via-custom-accent-purple/5 to-custom-accent-cyan/5" />

			<div className="w-full flex flex-row items-center justify-start gap-4 sm:justify-center sm:gap-8 custom-lg:gap-14 relative z-10">
				<PageLink title="Home" href="/" index={0}/>
				<PageLink title="Projects" href="https://github.com/Luis-St" index={1}/>
				<PageLink title="Skills" index={2}/>
				<PageLink title="Imprint" className="hidden xs:block" index={3}/>
				<PageLink title="Contact" className="hidden xs:block" index={4}/>
			</div>
			<ThemeToggle className="hidden nano:block relative z-10"/>
		</motion.div>
	);
}

function PageLink(
	{ title, href, className, index = 0, ...props }: Omit<React.ComponentProps<typeof Link>, "href"> & { title: string, href?: string, index?: number },
) {
	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
		>
			<Link
				href={href ? href : "/" + title.toLowerCase()}
				className={cn(
					"relative text-lg text-custom-white-primary xs:text-xl sm:text-2xl custom-lg:text-3xl",
					"transition-all duration-300 hover:text-custom-light-blue",
					"before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5",
					"before:bg-gradient-to-r before:from-custom-blue before:via-custom-accent-purple before:to-custom-accent-pink",
					"before:transition-all before:duration-300",
					"hover:before:w-full",
					className
				)}
				{...props}
			>
				<strong>{title}</strong>
			</Link>
		</motion.div>
	);
}
