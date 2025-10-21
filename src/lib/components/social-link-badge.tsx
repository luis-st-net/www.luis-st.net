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
			<div
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
				<div
					className="absolute -inset-1 bg-gradient-to-r from-custom-light-blue/30 via-custom-accent-purple/30 to-custom-accent-cyan/30 rounded-2xl blur-lg opacity-0"
				/>

				<div className="flex flex-row items-center p-4 xs:p-5 relative z-10">
					<div>
						<Icon className="size-12 tiny:size-14 xs:size-20 text-custom-light-blue drop-shadow-lg"/>
					</div>
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
			</div>
		</Link>
	);
}
