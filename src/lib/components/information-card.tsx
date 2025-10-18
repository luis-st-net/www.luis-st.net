"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InformationCard(
	{ intro, title, children }: { intro: string; title: string; children: React.ReactNode },
) {
	return (
		<div className="w-full flex flex-col items-center p-8 sm:w-120 2xl:max-w-[50%] 2xl:items-start relative group">
			{/* Subtle glow effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-custom-accent-purple/5 to-custom-blue/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

			<div className="relative z-10">
				<motion.h3
					className="text-2xl mb-6 bg-gradient-to-r from-custom-light-blue to-custom-accent-cyan bg-clip-text text-transparent font-bold tracking-wide"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					{intro}
				</motion.h3>
				<motion.h1
					className="text-6xl sm:text-7xl mb-8 gradient-text font-black tracking-tight"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{title}
				</motion.h1>
				<motion.p
					className="text-lg sm:text-xl text-center mb-4 sm:text-left 2xl:w-2/3 text-custom-gray dark:text-custom-white-tertiary/90 leading-relaxed font-medium"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					{children}
				</motion.p>
			</div>
		</div>
	);
}
