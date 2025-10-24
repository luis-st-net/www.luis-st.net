"use client";

import { SocialLink } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utility";

export default function SocialLinkBadge(
	{ icon: Icon, href, title, username, description }: SocialLink,
) {
	return (
		<Link href={href} className="group w-full max-w-sm sm:max-w-none sm:w-auto">
			<div
				className={cn(
					"w-full sm:w-72 md:w-80 lg:w-96",
					"glass rounded-2xl shadow-lg overflow-hidden",
					"border border-white/20 hover:border-white/40",
					"transition-all duration-300",
					"relative group-hover:shadow-2xl group-hover:shadow-custom-blue/30"
				)}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-custom-light-blue/15 via-custom-accent-purple/10 to-custom-accent-cyan/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

				<div
					className="absolute -inset-1 bg-gradient-to-r from-custom-light-blue/30 via-custom-accent-purple/30 to-custom-accent-cyan/30 rounded-2xl blur-lg opacity-0"
				/>

				<div className="flex flex-row items-center p-4 sm:p-5 relative z-10">
					<div className="flex-shrink-0">
						<Icon className="size-12 sm:size-14 md:size-16 lg:size-20 text-custom-light-blue drop-shadow-lg"/>
					</div>
					<div className="ml-3 sm:ml-4 flex-1 min-w-0">
						<h5 className="text-base sm:text-lg md:text-xl font-bold text-custom-text-primary mb-1 transition-colors group-hover:text-custom-light-blue truncate">
							{title}
						</h5>
						<p className="text-xs sm:text-sm text-custom-text-tertiary font-medium truncate">
							{username}
						</p>
						<p className="text-xs sm:text-sm text-custom-text-tertiary/80 truncate">
							{description}
						</p>
					</div>
				</div>

				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
					initial={{ x: "-100%" }}
					whileHover={{ x: "200%" }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
					style={{ transform: "skewX(-20deg)" }}
				/>
			</div>
		</Link>
	);
}
