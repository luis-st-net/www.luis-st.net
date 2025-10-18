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
		<Link href={href} className="group">
			<motion.div
				whileHover={{ scale: 1.03, y: -8 }}
				whileTap={{ scale: 0.97 }}
				transition={{ type: "spring", stiffness: 400, damping: 20 }}
				className={cn(
					"w-48 micro:w-72 xs:w-96",
					"glass rounded-2xl shadow-lg overflow-hidden",
					"border border-white/20 hover:border-white/40",
					"transition-all duration-300",
					"relative group-hover:shadow-2xl group-hover:shadow-custom-blue/30"
				)}
			>
				{/* Enhanced gradient overlay on hover */}
				<div className="absolute inset-0 bg-gradient-to-br from-custom-light-blue/15 via-custom-accent-purple/10 to-custom-accent-cyan/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

				{/* Outer glow on hover */}
				<motion.div
					className="absolute -inset-1 bg-gradient-to-r from-custom-light-blue/30 via-custom-accent-purple/30 to-custom-accent-cyan/30 rounded-2xl blur-lg opacity-0"
					whileHover={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				/>

				<div className="flex flex-row items-center p-4 xs:p-5 relative z-10">
					<motion.div
						whileHover={{ rotate: [0, -12, 12, -8, 8, 0], scale: 1.1 }}
						transition={{ duration: 0.6 }}
					>
						<Icon className="size-12 tiny:size-14 xs:size-20 text-custom-light-blue drop-shadow-lg"/>
					</motion.div>
					<div className="ml-4 my-0.5 tiny:my-1">
						<h5 className="text-base tiny:text-lg sm:text-xl font-bold text-white mb-1 transition-colors group-hover:text-custom-light-blue">
							{title}
						</h5>
						<p className="text-xs tiny:text-sm text-custom-white-tertiary font-medium">
							{username}
						</p>
						<p className="text-xs tiny:text-sm text-custom-white-tertiary/80">
							{description}
						</p>
					</div>
				</div>

				{/* Enhanced shine effect */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
					initial={{ x: "-100%" }}
					whileHover={{ x: "200%" }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
					style={{ transform: "skewX(-20deg)" }}
				/>
			</motion.div>
		</Link>
	);
}
