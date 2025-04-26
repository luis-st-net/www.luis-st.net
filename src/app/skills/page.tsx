"use client";

import React, { useState } from "react";
import { Skill } from "@/lib/types";
import { frameworks, languages, buildSystems, developmentTools } from "@/lib/skills";
import ContentPane from "@/lib/components/content-pane";
import { cn } from "@/lib/utils";

export default function () {
	return (
		<div className="w-full flex flex-col items-center 2xl:w-3/4">
			<div className="min-h-[calc(calc(100vh-80px)*4)] flex flex-col items-center">
				<SkillSection type="Languages" text="i have already used" skills={languages}/>
				<SkillSection type="Frameworks" text="i have worked with" skills={frameworks}/>
				<SkillSection type="Build Systems" text="i have already used" skills={buildSystems}/>
				<SkillSection type="Development Tools" text="i have worked with" skills={developmentTools}/>
			</div>
		</div>
	);
}

function SkillSection(
	{ type, text, skills }: { type: string, text: string, skills: Skill[] },
) {
	return (
		<div className="min-h-[calc(100vh-80px)] w-4/6 flex flex-col justify-center">
			<h2 className="text-6xl mb-10">
				{type}
			</h2>
			
			<div className="h-fit flex flex-row flex-wrap gap-10 items-center">
				{skills.map((framework) => (
					<SkillBadge key={framework.name} {...framework}/>
				))}
			</div>
			
			{/*Duplicated header for centering the inner section*/}
			<h2 className="text-6xl mb-10 opacity-0 select-none">
				{type}
			</h2>
		</div>
	);
}

function SkillBadge(
	{ name, experience, description, color }: Skill,
) {
	const [isHovered, setIsHovered] = useState(false);
	
	const createGlow = (color: string, intensity: number) => {
		return `0 0 ${intensity}px var(${color}), 0 0 ${intensity * 2}px var(${color}), 0 0 ${intensity * 3}px var(${color})`;
	};
	
	return (
		<ContentPane defaultSpacing={false} className={cn(color.background, "cursor-pointer")} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className="w-96 h-28 bg-custom-white dark:bg-custom-primary rounded-md">
				<div className={cn("absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-500", isHovered ? "opacity-0" : "opacity-100")}>
					<div
						className="font-bold text-2xl mb-3 transition-all text-background"
						style={{
							textShadow: createGlow(color.background.replace("bg-", "--"), 2),
							letterSpacing: "1px",
						}}
					>
						{name}
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
