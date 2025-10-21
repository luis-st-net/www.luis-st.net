"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "@/lib/components/custom";
import { FaCode } from "react-icons/fa";

import { cn } from "@/lib/utility";

export default function NavigationBar() {
	const { scrollY } = useScroll();
	const [isScrolled, setIsScrolled] = useState(false);

	// Track scroll position
	React.useEffect(() => {
		const unsubscribe = scrollY.on("change", (latest) => {
			setIsScrolled(latest > 50);
		});
		return () => unsubscribe();
	}, [scrollY]);

	const headerBackground = useTransform(
		scrollY,
		[0, 100],
		["rgba(15, 23, 42, 0.3)", "rgba(15, 23, 42, 0.8)"]
	);

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			style={{ backgroundColor: headerBackground }}
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				"backdrop-blur-xl border-b border-white/10",
				isScrolled ? "shadow-2xl shadow-custom-blue/10" : ""
			)}
		>
			{/* Animated gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-custom-blue/10 via-custom-accent-purple/10 to-custom-accent-cyan/10 opacity-50" />

			{/* Animated accent line */}
			<motion.div
				className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan"
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.2, delay: 0.5 }}
			/>

			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20 relative z-10">
					{/* Logo/Brand */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex items-center gap-3"
					>
						<Link href="/" className="flex items-center gap-3 group">
							<motion.div
								whileHover={{ rotate: 360, scale: 1.1 }}
								transition={{ duration: 0.6 }}
								className="p-2 rounded-lg bg-gradient-to-br from-custom-blue via-custom-accent-purple to-custom-accent-cyan"
							>
								<FaCode className="size-6 text-white" />
							</motion.div>
							<div className="hidden sm:flex flex-col">
								<span className="text-xl font-black text-white drop-shadow-lg">
									Luis Staudt
								</span>
								<span className="text-xs text-custom-white-tertiary font-medium -mt-1">
									Software Developer
								</span>
							</div>
						</Link>
					</motion.div>

					{/* Navigation Links and Theme Toggle */}
					<div className="flex items-center gap-2 sm:gap-4 custom-lg:gap-8">
						<PageLink title="Home" href="/" index={0}/>
						<PageLink title="Projects" href="https://github.com/Luis-St" index={1}/>
						<PageLink title="Skills" index={2}/>

						{/* Theme Toggle with enhanced styling */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="hidden nano:flex ml-4"
						>
							<ThemeToggle />
						</motion.div>
					</div>
				</div>
			</nav>
		</motion.header>
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
					"relative px-3 py-2 text-sm xs:text-base sm:text-lg font-bold",
					"text-custom-white-primary transition-all duration-300",
					"hover:text-transparent hover:bg-gradient-to-r hover:from-custom-light-blue hover:to-custom-accent-cyan hover:bg-clip-text",
					"after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px]",
					"after:bg-gradient-to-r after:from-custom-blue after:via-custom-accent-purple after:to-custom-accent-cyan",
					"after:transition-all after:duration-300",
					"hover:after:w-full",
					className
				)}
				{...props}
			>
				{title}
			</Link>
		</motion.div>
	);
}
