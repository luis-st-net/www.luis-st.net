"use client";

import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import ContentPane from "@/lib/components/content-pane";
import { SocialLink } from "@/lib/types";
import CodeBlock from "@/lib/components/code-block";
import { getAgeFromBirthdate } from "@/lib/utility";
import InformationCard from "@/lib/components/information-card";
import SocialLinkBadge from "@/lib/components/social-link-badge";
import { motion } from "framer-motion";

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
			"knows how to brew coffee with a tea pot"
		]
	}
}
`.trim();

export default function () {
	return (
		<div className="w-full flex flex-col items-center 2xl:w-3/4">
			<IntroductionSection/>
			<SocialSection/>
		</div>
	);
}

function IntroductionSection() {
	return (
		<div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center m-8 gap-12 2xl:flex-row 2xl:gap-20 relative">
			{/* Enhanced floating decorative elements */}
			<motion.div
				className="absolute top-10 left-0 w-96 h-96 bg-gradient-to-br from-custom-blue/15 via-custom-accent-purple/10 to-transparent rounded-full blur-3xl pointer-events-none"
				animate={{
					scale: [1, 1.1, 1],
					x: [0, 50, 0],
					y: [0, 30, 0],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			<motion.div
				className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-br from-custom-accent-cyan/15 via-custom-accent-purple/10 to-transparent rounded-full blur-3xl pointer-events-none"
				animate={{
					scale: [1, 1.2, 1],
					x: [0, -40, 0],
					y: [0, -20, 0],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>

			<motion.div
				initial={{ opacity: 0, x: -80, scale: 0.95 }}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
				className="z-10"
			>
				<InformationCard intro="Hi, I'm" title="Luis">
					I'm a software developer and computer science student at the University of Furtwangen.
					I'm passionate about software development and constantly exploring emerging technologies.
					I've mastered several programming languages.
					While my expertise primarily lies in backend development, I'm also proficient in developing web applications.
				</InformationCard>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 80, scale: 0.95 }}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
				whileHover={{ scale: 1.02 }}
				className="hidden xs:block z-10"
			>
				<ContentPane defaultColor={true} defaultSpacing={false}>
					<CodeBlock language="json" className="w-fit xl:w-full">
						{me}
					</CodeBlock>
				</ContentPane>
			</motion.div>
		</div>
	);
}

function SocialSection() {
	return (
		<div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center m-8 gap-12 2xl:flex-row 2xl:gap-20 relative">
			{/* Decorative gradient orb */}
			<motion.div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-custom-accent-purple/10 to-custom-blue/10 rounded-full blur-3xl pointer-events-none"
				animate={{
					scale: [1, 1.05, 1],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 60, scale: 0.9 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="z-10"
			>
				<InformationCard intro="My" title="Socials">
					if you're interested in my work or want to connect, feel free to reach out to me on any platform.
				</InformationCard>
			</motion.div>
			<div className="flex flex-col flex-wrap gap-6 sm:gap-8 z-10">
				{socials.map((social, index) => (
					<motion.div
						key={social.title}
						initial={{ opacity: 0, x: 60, scale: 0.9 }}
						whileInView={{ opacity: 1, x: 0, scale: 1 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{
							duration: 0.6,
							delay: 0.15 * index,
							ease: "easeOut"
						}}
					>
						<SocialLinkBadge {...social}/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
