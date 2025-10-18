"use client";

import * as Icons from "lucide-react";
import * as React from "react";
import { HTMLAttributes, useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utility";

export function ThemeToggle(
	{ className, ...props }: HTMLAttributes<HTMLDivElement> & { className?: string },
) {
	const { setTheme, theme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const themes = [
		{ name: "Light", value: "light", icon: Icons.Sun },
		{ name: "Dark", value: "dark", icon: Icons.Moon },
		{ name: "System", value: "system", icon: Icons.Monitor },
	];

	return (
		<div className={cn("relative", className)} ref={dropdownRef} {...props}>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					"size-10 sm:size-11 rounded-xl",
					"glass border border-white/20 hover:border-white/40",
					"flex items-center justify-center",
					"transition-all duration-300",
					"shadow-lg hover:shadow-xl hover:shadow-custom-blue/20",
					"relative overflow-hidden group"
				)}
			>
				{/* Gradient overlay on hover */}
				<div className="absolute inset-0 bg-gradient-to-br from-custom-light-blue/10 via-transparent to-custom-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

				{/* Icons */}
				<Icons.Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-custom-light-blue relative z-10"/>
				<Icons.Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-custom-accent-purple relative z-10"/>
			</motion.button>

			{/* Dropdown Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						transition={{ duration: 0.2 }}
						className={cn(
							"absolute top-full mt-2 right-0",
							"min-w-40 rounded-xl",
							"glass border border-white/20",
							"shadow-2xl shadow-custom-blue/20",
							"overflow-hidden",
							"z-50"
						)}
					>
						<div className="p-2">
							{themes.map((themeOption, index) => {
								const Icon = themeOption.icon;
								return (
									<motion.button
										key={themeOption.value}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.05 }}
										onClick={() => {
											setTheme(themeOption.value);
											setIsOpen(false);
										}}
										className={cn(
											"w-full px-4 py-2.5 rounded-lg",
											"flex items-center gap-3",
											"text-sm font-medium",
											"transition-all duration-200",
											"hover:bg-gradient-to-r hover:from-custom-light-blue/20 hover:to-custom-accent-purple/20",
											theme === themeOption.value && "bg-gradient-to-r from-custom-light-blue/30 to-custom-accent-purple/30",
											"text-white"
										)}
									>
										<Icon className="h-4 w-4" />
										{themeOption.name}
									</motion.button>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
