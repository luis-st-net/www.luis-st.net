"use client";

import React from "react";
import { Skill } from "@/lib/types";
import { buildSystems, developmentTools, frameworks, languages } from "@/lib/skills";
import SkillBadge from "@/lib/components/skill-badge";
import { motion } from "framer-motion";

export default function () {
	return (
		<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-16"
			>
				<h1 className="text-5xl sm:text-6xl md:text-7xl font-black gradient-text mb-6">
					My Skills
				</h1>
				<div className="w-24 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan mx-auto rounded-full mb-6" />
				<p className="text-xl text-custom-white-tertiary max-w-2xl mx-auto">
					Technologies and tools I've worked with throughout my journey as a developer.
				</p>
			</motion.div>

			<div className="space-y-20">
				<SkillSection type="Languages" skills={languages} index={0}/>
				<SkillSection type="Frameworks & Libraries" skills={frameworks} index={1}/>
				<SkillSection type="Build Systems" skills={buildSystems} index={2}/>
				<SkillSection type="Development Tools" skills={developmentTools} index={3}/>
			</div>
		</div>
	);
}

function SkillSection(
	{ type, skills, index }: { type: string, skills: Skill[], index: number },
) {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.1,
			}
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
			className="relative"
		>
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
				className="mb-8"
			>
				<h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">
					{type}
				</h2>
				<div className="w-20 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan rounded-full" />
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{skills.map((skill) => (
					<motion.div key={skill.name}>
						<SkillBadge {...skill}/>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
