"use client";

import { Skill } from "@/lib/types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utility";

export default function SkillBadge(
	{ name, experience, description }: Skill,
) {
	const [isExpanded, setIsExpanded] = useState(false);

	// Map experience to visual indicator
	const getExperienceColor = (exp: string) => {
		switch (exp) {
			case "Expert":
				return "from-custom-blue to-custom-accent-cyan";
			case "Advanced":
			case "Experienced":
				return "from-custom-accent-purple to-custom-accent-pink";
			case "Proficient":
				return "from-custom-accent-cyan to-custom-blue";
			default:
				return "from-custom-gray to-custom-dark-gray";
		}
	};

	return (
		<motion.div
			onClick={() => setIsExpanded(!isExpanded)}
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className={cn(
				"relative cursor-pointer overflow-hidden rounded-xl",
				"glass border border-white/10 hover:border-custom-blue/30",
				"transition-all duration-300",
				"w-64 sm:w-72",
				isExpanded ? "h-auto" : "h-28"
			)}
		>
			{/* Subtle gradient overlay on hover */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-custom-blue/5 via-transparent to-custom-accent-purple/5 opacity-0"
				whileHover={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			/>

			{/* Content */}
			<div className="relative z-10 p-5 flex flex-col h-full">
				{/* Header */}
				<div className="flex items-start justify-between mb-2">
					<h3 className="text-xl font-bold text-white">
						{name}
					</h3>

					{/* Expand indicator - subtle */}
					<motion.div
						animate={{ rotate: isExpanded ? 180 : 0 }}
						transition={{ duration: 0.3 }}
						className="text-custom-white-tertiary text-sm mt-1"
					>
						▼
					</motion.div>
				</div>

				{/* Experience badge with gradient */}
				<div className="flex items-center gap-2 mb-3">
					<div className={cn(
						"h-1.5 w-16 rounded-full bg-gradient-to-r",
						getExperienceColor(experience)
					)} />
					<span className="text-xs font-semibold text-custom-white-tertiary uppercase tracking-wide">
						{experience}
					</span>
				</div>

				{/* Description - Expands on click */}
				<AnimatePresence>
					{isExpanded && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="overflow-hidden"
						>
							<p className="text-sm leading-relaxed text-custom-white-tertiary pt-2 border-t border-white/10">
								{description}
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Subtle shine effect on hover */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
				initial={{ x: "-100%", skewX: -20 }}
				whileHover={{ x: "200%" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			/>
		</motion.div>
	);
}