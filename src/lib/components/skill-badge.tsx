"use client";

import { Skill } from "@/lib/types";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utility";

export default function SkillBadge(
	{ name, experience, description, color }: Skill,
) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<motion.div
			onClick={() => setIsExpanded(!isExpanded)}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.02, y: -4 }}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 400, damping: 25 }}
			className={cn(
				"relative cursor-pointer overflow-hidden rounded-2xl",
				"shadow-lg hover:shadow-2xl transition-all duration-300",
				isExpanded ? "w-72 sm:w-96" : "w-72 sm:w-96",
				isExpanded ? "h-auto min-h-40" : "h-32"
			)}
		>
			{/* Gradient background with color */}
			<div className={cn(
				"absolute inset-0 bg-gradient-to-br",
				color.background
			)} />

			{/* Overlay for depth */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

			{/* Glow effect on hover */}
			<motion.div
				className="absolute -inset-1 bg-gradient-to-r from-custom-light-blue/50 via-custom-accent-purple/50 to-custom-accent-cyan/50 rounded-2xl opacity-0 blur-xl"
				whileHover={{ opacity: 0.6 }}
				transition={{ duration: 0.3 }}
			/>

			{/* Content */}
			<div className="relative z-10 p-6 flex flex-col h-full">
				{/* Header - Always visible */}
				<div className="flex items-center justify-between mb-3">
					<motion.h3
						className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg"
						layout
					>
						{name}
					</motion.h3>

					{/* Expand indicator */}
					<motion.div
						animate={{ rotate: isExpanded ? 180 : 0 }}
						transition={{ duration: 0.3 }}
						className="text-white/80 text-xl"
					>
						▼
					</motion.div>
				</div>

				{/* Experience badge */}
				<motion.div
					layout
					className={cn(
						"inline-flex items-center px-4 py-1.5 rounded-full",
						"bg-white/20 backdrop-blur-sm border border-white/40",
						"text-white font-semibold text-sm shadow-lg",
						"w-fit"
					)}
				>
					{experience}
				</motion.div>

				{/* Description - Expands on click */}
				<motion.div
					initial={false}
					animate={{
						height: isExpanded ? "auto" : 0,
						opacity: isExpanded ? 1 : 0,
						marginTop: isExpanded ? 16 : 0
					}}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="overflow-hidden"
				>
					<p className="text-base leading-relaxed text-white/90 font-medium">
						{description}
					</p>
				</motion.div>
			</div>

			{/* Shine effect on hover */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
				initial={{ x: "-100%", skewX: -20 }}
				whileHover={{ x: "200%" }}
				transition={{ duration: 0.7, ease: "easeInOut" }}
			/>

			{/* Border glow */}
			<div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
		</motion.div>
	);
}