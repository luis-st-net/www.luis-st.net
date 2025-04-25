"use client";

import React, { useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import ContentPane from "@/lib/components/content-pane";
import Link from "next/link";
import { Skill, SocialLink } from "@/lib/types";
import CodeBlock from "@/lib/components/code-block";
import { getAgeFromBirthdate } from "@/lib/utility";
import { cn } from "@/lib/utils";
import { languages, frameworks } from "@/lib/skills";

const github: SocialLink = {
	icon: FaGithub,
	href: "https://github.com/Luis-St",
	title: "GitHub",
	username: "Luis-St",
	description: "Projects and contributions",
};
const linkedin: SocialLink = {
	icon: FaLinkedin,
	href: "https://www.linkedin.com/in/luis-staudt-63b384285",
	title: "LinkedIn",
	username: "Luis Staudt",
	description: "Networking and professional profile",
};
const discord: SocialLink = {
	icon: FaDiscord,
	href: "https://www.discordapp.com/users/488344980415578124/",
	title: "Discord",
	username: "Luis-St",
	description: "Chat and community",
};
const socials: SocialLink[] = [
	github, linkedin, discord,
];

const me = `
{
	"me": {
		"name": "Luis Staudt",
		"age": ${getAgeFromBirthdate()},
		"location": {
			"country": "Germany"
		},
		"interests": [
			"backend development",
			"theoretical computer science",
			"programming languages",
			"web development"
		],
		"useless knowledge": [
			"write/edit java bytecode",
			"advanced compiler fundamentals",
			"be able to center a div",
			"knowledge of how to brew coffee with a tea pot"
		]
	}
}
`.trim();

export default function () {
	return (
		<div className="w-full flex flex-col items-center 2xl:w-3/4">
			<IntroductionSection/>
			<ProfileDetailsSection/>
		</div>
	);
}

function IntroductionSection() {
	return (
		<div className="min-h-[calc(100vh-68px)] flex flex-col items-center justify-center 2xl:flex-row">
			<div className="w-[30rem] flex flex-col items-center 2xl:max-w-[50%] 2xl:items-start">
				<h3 className="text-2xl mb-8">
					Hey, I'm
				</h3>
				<h1 className="text-6xl font-bold mb-8">
					Luis
				</h1>
				<p className="text-lg mb-4 2xl:w-2/3">
					a software developer and computer science student at the University of Furtwangen.
					I'm passionate about software development and constantly exploring emerging technologies.
					I've mastered several programming languages.
					While my expertise primarily lies in backend development, I'm also proficient in developing web applications.
				</p>
			</div>
			<ContentPane defaultColor={true} defaultSpacing={false}>
				<CodeBlock language="json" className="w-fit xl:w-full">
					{me}
				</CodeBlock>
			</ContentPane>
		</div>
	);
}

function ProfileDetailsSection() {
	return (
		<div className="min-h-[calc(calc(100vh-68px)*4)] flex flex-col items-center">
			<div className="min-h-[calc(100vh-68px)] flex flex-col">
				<h2 className="text-4xl mb-6">
					Languages
				</h2>
				<div className="flex flex-row flex-wrap gap-10">
					{languages.map((language) => (
						<SkillBadge key={language.name} {...language}/>
					))}
				</div>
			</div>
			<div className="min-h-[calc(100vh-68px)] flex flex-col">
				<h2 className="text-4xl mb-6">
					Frameworks
				</h2>
				<div className="flex flex-row flex-wrap gap-10">
					{frameworks.map((framework) => (
						<SkillBadge key={framework.name} {...framework}/>
					))}
				</div>
			</div>
			
			<div className="min-h-[calc(100vh-68px)] flex flex-col">
				<h2 className="text-4xl mb-6">
					Socials
				</h2>
				<div className="flex flex-row flex-wrap gap-10">
					{socials.map((social) => (
						<SocialLinkBadge key={social.title} {...social}/>
					))}
				</div>
			</div>
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
		<ContentPane defaultSpacing={false} className={color.background} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className="w-96 h-28 bg-custom-black rounded-md">
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

function SocialLinkBadge(
	{ icon: Icon, href, title, username, description }: SocialLink,
) {
	return (
		<Link href={href}>
			<ContentPane defaultColor={true} className="mt-0 mb-0 w-[22rem] transition-transform hover:scale-105">
				<div className="flex flex-row items-center">
					<Icon className="size-20"/>
					<div className="ml-3.5 mt-1 mb-1">
						<h4 className="text-lg font-bold">
							{title}
						</h4>
						<p className="text-sm">
							{username}
						</p>
						<p className="text-sm">
							{description}
						</p>
					</div>
				</div>
			</ContentPane>
		</Link>
	);
}
