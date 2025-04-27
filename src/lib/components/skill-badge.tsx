"use client";

import { Skill } from "@/lib/types";
import React, { useState } from "react";
import ContentPane from "@/lib/components/content-pane";

import { cn } from "@/lib/utility";

export default function SkillBadge(
	{ name, experience, description, color }: Skill,
) {
	const [isHovered, setIsHovered] = useState(false);
	
	const createGlow = (color: string, intensity: number) => {
		return `0 0 ${intensity}px var(${color}), 0 0 ${intensity * 2}px var(${color}), 0 0 ${intensity * 3}px var(${color})`;
	};
	
	return (
		<ContentPane defaultSpacing={false} className={cn(color.background, "cursor-pointer")} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className="size-52 bg-custom-white dark:bg-custom-primary rounded-md sm:w-96 sm:h-28">
				<div className={cn("absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-500", isHovered ? "opacity-0" : "opacity-100")}>
					<div
						className="text-2xl mb-3 transition-all text-background"
						style={{
							textShadow: createGlow(color.background.replace("bg-", "--"), 2),
							letterSpacing: "1px",
						}}
					>
						<strong>
							{name}
						</strong>
					</div>
					<div style={{ boxShadow: "none" }} className={cn("text-sm px-3 py-1 rounded-full border transition-all duration-300 bg-transparent", color.text)}>
						{experience}
					</div>
				</div>
				
				<div className={cn("absolute inset-0 w-full h-full flex items-center justify-center p-6 text-center transition-opacity duration-500 text-foreground", isHovered ? "opacity-100" : "opacity-0")}>
					<p className={cn("text-sm leading-relaxed select-none", color.text)}>
						{description}
					</p>
				</div>
			</div>
		</ContentPane>
	);
}