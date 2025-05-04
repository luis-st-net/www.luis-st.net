"use client";

import React from "react";
import { Skill } from "@/lib/types";
import { buildSystems, developmentTools, frameworks, languages } from "@/lib/skills";
import SkillBadge from "@/lib/components/skill-badge";

export default function () {
	return (
		<div className="w-full">
			<div className="min-h-[calc(calc(100vh-120px)*4)] flex flex-col items-center">
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
		<div className="w-5/6 min-h-[calc(100vh-120px)] flex flex-col items-center justify-center xl:w-4/6">
			<h2 className="text-4xl text-center my-10 sm:text-6xl sm:text-left custom-lg:self-start">
				{type}
			</h2>
			
			<div className="w-full flex flex-row flex-wrap gap-10 justify-center custom-lg:justify-start">
				{skills.map((framework) => (
					<SkillBadge key={framework.name} {...framework}/>
				))}
			</div>
			
			{/*Duplicated header for centering the inner section*/}
			<h2 className="text-6xl my-10 opacity-0 select-none">
				{type}
			</h2>
		</div>
	);
}
