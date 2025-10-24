"use client";

import { Skill } from "@/lib/types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utility";

export default function SkillBadge(
	{ name, experience, description, color }: Skill,
) {
	const [isExpanded, setIsExpanded] = useState(false);

	const getExperienceData = (exp: string) => {
		switch (exp) {
			case "Expert":
				return {
					percentage: 95,
					color: "from-amber-400 via-orange-400 to-amber-400",
					glowColor: "shadow-orange-400/50"
				};
			case "Advanced":
				return {
					percentage: 70,
					color: "from-custom-accent-purple via-custom-accent-pink to-custom-accent-purple",
					glowColor: "shadow-custom-accent-pink/50"
				};
			case "Experienced":
				return {
					percentage: 50,
					color: "from-custom-accent-cyan via-custom-blue to-custom-accent-cyan",
					glowColor: "shadow-custom-accent-cyan/50"
				};
			case "Proficient":
				return {
					percentage: 32,
					color: "from-green-400 via-emerald-400 to-teal-400",
					glowColor: "shadow-emerald-400/50"
				};
			case "Beginner":
				return {
					percentage: 12,
					color: "from-rose-400 via-pink-400 to-rose-400",
					glowColor: "shadow-rose-400/50"
				};
			default:
				return {
					percentage: 12,
					color: "from-rose-400 via-pink-400 to-rose-400",
					glowColor: "shadow-rose-400/50"
				};
		}
	};

	const expData = getExperienceData(experience);

	return (
		<motion.div
			layout
			onClick={() => setIsExpanded(!isExpanded)}
			className={cn(
				"relative cursor-pointer overflow-hidden rounded-2xl",
				"glass border border-white/10 hover:border-custom-blue/40",
				"transition-all duration-300 group",
				"w-full"
			)}
		>
			<div className={cn(
				"absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10",
				color.background
			)} />

			<div className="absolute -inset-[1px] bg-gradient-to-r from-custom-blue/0 via-custom-blue/20 to-custom-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-2xl" />

			<div className="relative z-10 p-5">
				<div className="flex items-start justify-between mb-4">
					<div className="flex-1">
						<h3 className="text-lg font-bold text-custom-text-primary mb-3">
							{name}
						</h3>

						<div className="mb-2">
							<span className="text-xs font-bold text-custom-text-secondary uppercase tracking-wider">
								{experience}
							</span>
						</div>

						<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
							<div
								style={{ width: `${expData.percentage}%` }}
								className={cn(
									"h-full bg-gradient-to-r rounded-full transition-all duration-500",
									expData.color,
									"shadow-lg",
									expData.glowColor
								)}
							/>
							<div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30"
								style={{
									width: `${expData.percentage}%`,
									animation: "shimmer 2s infinite",
								}}
							/>
						</div>
					</div>

					<motion.div
						animate={{ rotate: isExpanded ? 180 : 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="ml-3 mt-1 text-custom-text-tertiary/60 group-hover:text-custom-light-blue transition-colors flex-shrink-0"
					>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
							<path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</motion.div>
				</div>

				<AnimatePresence mode="wait">
					{isExpanded && (
						<motion.div
							initial={{ height: 0, opacity: 0, marginTop: 0 }}
							animate={{ height: "auto", opacity: 1, marginTop: 12 }}
							exit={{ height: 0, opacity: 0, marginTop: 0 }}
							transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
							className="overflow-hidden"
						>
							<div className="pt-3 border-t border-white/10">
								<p className="text-sm leading-relaxed text-custom-text-tertiary">
									{description}
								</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}
