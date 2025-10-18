"use client";

import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utility";

export default function ContentPane(
	{ children, defaultColor = false, defaultSpacing = true, className }: HTMLAttributes<HTMLDivElement> & { children: React.ReactNode, defaultColor?: boolean, defaultSpacing?: boolean },
) {
	const { isGradient, gradientType, gradientFrom, gradientTo, isStaticColor, staticColor, classes } = findClassesForShadow(className);

	let shadowClasses = "";

	if (isStaticColor) {
		shadowClasses = staticColor;
	} else if (isGradient) {
		shadowClasses = gradientType + " " + gradientFrom + " " + gradientTo;
	} else if (defaultColor) {
		shadowClasses = "bg-gradient-to-br from-custom-light-blue via-custom-blue to-custom-accent-purple";
	} else {
		throw new Error("Expected either a static color ('bg-*') or a gradient color ('bg-gradient-to-*', 'from-*', 'to-*') for the shadow.");
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 30, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={cn("relative group", defaultSpacing && "mt-16 mb-8", classes)}
		>
			{/* Glow effect */}
			<div className={cn("absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500", shadowClasses)}/>

			{/* Border gradient */}
			<div className={cn("relative rounded-2xl p-0.5", shadowClasses)}>
				{/* Content container with glass effect */}
				<div className={cn(
					"rounded-2xl glass border border-white/10",
					"bg-custom-secondary/80 dark:bg-custom-tertiary/80",
					"backdrop-blur-xl shadow-2xl",
					defaultSpacing && "p-6"
				)}>
					{/* Subtle gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 rounded-2xl pointer-events-none" />

					{/* Content */}
					<div className="relative z-10">
						{children}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function findClassesForShadow(
	className?: string | undefined,
) {
	const classes = className?.split(" ") || [];
	
	const containsGradientType = classes.some((cls) => cls.startsWith("bg-gradient-to-"));
	const containsGradientFrom = classes.some((cls) => cls.startsWith("from-"));
	const containsGradientTo = classes.some((cls) => cls.startsWith("to-"));
	
	const gradientType = containsGradientType ? classes.find((cls) => cls.startsWith("bg-gradient-to-")) : "";
	const gradientFrom = containsGradientFrom ? classes.find((cls) => cls.startsWith("from-")) : "";
	const gradientTo = containsGradientTo ? classes.find((cls) => cls.startsWith("to-")) : "";
	
	const color = classes.find((cls) => cls.startsWith("bg-")) || "";
	const filteredClasses = classes.filter((cls) => !cls.startsWith("bg-gradient-to-") && !cls.startsWith("from-") && !cls.startsWith("to-") && !cls.startsWith("bg-"));
	
	return {
		isGradient: containsGradientType && containsGradientFrom && containsGradientTo,
		gradientType: gradientType,
		gradientFrom: gradientFrom,
		gradientTo: gradientTo,
		isStaticColor: color !== "",
		staticColor: color,
		classes: filteredClasses,
	};
}
