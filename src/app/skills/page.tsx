"use client";

import React from "react";
import { Skill } from "@/lib/types";
import { buildSystems, developmentTools, frameworks, languages } from "@/lib/skills";
import SkillBadge from "@/lib/components/skill-badge";
import { motion } from "framer-motion";

export default function () {
	return (
		<div className="w-full">
			<div className="min-h-[calc(calc(100vh-120px)*4)] flex flex-col items-center">
				<SkillSection type="Languages" text="i have already used" skills={languages} index={0}/>
				<SkillSection type="Frameworks" text="i have worked with" skills={frameworks} index={1}/>
				<SkillSection type="Build Systems" text="i have already used" skills={buildSystems} index={2}/>
				<SkillSection type="Development Tools" text="i have worked with" skills={developmentTools} index={3}/>
			</div>
		</div>
	);
}

function SkillSection(
	{ type, text, skills, index }: { type: string, text: string, skills: Skill[], index: number },
) {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring" as const,
				stiffness: 350,
				damping: 25
			}
		}
	};

	return (
		<div className="w-5/6 min-h-[calc(100vh-120px)] flex flex-col items-center justify-center xl:w-4/6 relative">
			{/* Decorative background element */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-custom-blue/5 via-transparent to-custom-accent-purple/5 rounded-3xl blur-3xl"
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1, ease: "easeOut" }}
			/>

			<motion.div
				initial={{ opacity: 0, y: -30, scale: 0.95 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
				className="w-full relative z-10"
			>
				<h2 className="text-5xl text-center my-12 sm:text-6xl sm:text-left custom-lg:self-start gradient-text font-black tracking-tight">
					{type}
				</h2>
				<p className="text-lg sm:text-xl text-center sm:text-left mb-8 text-custom-gray dark:text-custom-white-tertiary/80 font-medium">
					{text}
				</p>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="w-full flex flex-row flex-wrap gap-8 justify-center custom-lg:justify-start relative z-10"
			>
				{skills.map((skill) => (
					<motion.div key={skill.name} variants={itemVariants}>
						<SkillBadge {...skill}/>
					</motion.div>
				))}
			</motion.div>

			{/*Duplicated header for centering the inner section*/}
			<h2 className="text-6xl my-12 opacity-0 select-none pointer-events-none">
				{type}
			</h2>
		</div>
	);
}
