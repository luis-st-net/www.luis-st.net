"use client";

import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaCode, FaServer, FaRocket, FaJava } from "react-icons/fa";
import { SiTypescript, SiReact, SiNextdotjs, SiSpring, SiDocker, SiKotlin } from "react-icons/si";
import { SocialLink } from "@/lib/types";
import { getAgeFromBirthdate } from "@/lib/utility";
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

export default function () {
	return (
		<div className="w-full flex flex-col items-center overflow-x-hidden overflow-y-visible">
			<HeroSection/>
			<AboutSection/>
			<ExpertiseSection/>
			<SocialSection/>
		</div>
	);
}

function HeroSection() {
	return (
		<section className="w-full min-h-[calc(100vh-5rem-4rem)] flex items-center justify-center relative overflow-x-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
			<motion.div
				className="absolute top-20 left-0 sm:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-custom-blue/20 via-custom-accent-purple/15 to-transparent rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					x: [0, 50, 0],
					y: [0, 50, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			<motion.div
				className="absolute bottom-20 right-0 sm:right-10 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-gradient-to-br from-custom-accent-cyan/20 via-custom-accent-pink/15 to-transparent rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					x: [0, -40, 0],
					y: [0, -40, 0],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>

			<div className="max-w-6xl mx-auto text-center relative z-10">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
				>
					<span className="block mb-2">Hi, I'm</span>
					<span className="gradient-text">Luis Staudt</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="text-lg sm:text-xl md:text-2xl text-custom-text-tertiary font-medium mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
				>
					Software Developer & Computer Science Student
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
				>
					<a
						href="#connect"
						className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan font-bold text-white text-base sm:text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-custom-blue/50 cursor-pointer text-center"
					>
						Let's Connect
					</a>
					<a
						href="https://github.com/Luis-St"
						className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass border-2 border-custom-blue/50 font-bold text-custom-light-blue text-base sm:text-lg transition-all hover:scale-105 hover:border-custom-blue hover:bg-custom-blue/10 text-center"
					>
						View Projects
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
					className="flex justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap px-4"
				>
					{[FaJava, SiDocker, SiTypescript, SiReact, SiKotlin].map((Icon, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: 0.8 + index * 0.1, ease: "easeOut" }}
							className="p-3 sm:p-4 rounded-xl glass border border-white/10 hover:border-custom-blue/50 transition-colors"
						>
							<Icon className="size-6 sm:size-8 text-custom-light-blue" />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

function AboutSection() {
	const age = getAgeFromBirthdate();

	return (
		<section className="w-full min-h-[calc(100vh-5rem-4rem)] flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 overflow-x-hidden relative">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-center mb-8 sm:mb-12 md:mb-16"
			>
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6">
					About Me
				</h2>
				<div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan mx-auto rounded-full" />
			</motion.div>

			<div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-custom-blue/30 transition-colors"
				>
					<h3 className="text-xl sm:text-2xl font-bold text-custom-light-blue mb-4 sm:mb-6">Background</h3>
					<p className="text-custom-text-tertiary text-base sm:text-lg leading-relaxed mb-4">
						I'm a {age}-year-old software developer and computer science student at the University of Furtwangen in Germany.
						My passion lies in crafting elegant solutions to complex problems.
					</p>
					<p className="text-custom-text-tertiary text-base sm:text-lg leading-relaxed">
						With expertise spanning from backend development to modern web applications,
						I continuously explore emerging technologies and push the boundaries of what's possible in software engineering.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-custom-blue/30 transition-colors"
				>
					<h3 className="text-xl sm:text-2xl font-bold text-custom-light-blue mb-4 sm:mb-6">Interests & Focus</h3>
					<ul className="space-y-3">
						{[
							"Backend Development",
							"Theoretical Computer Science",
							"Programming Languages",
							"Web Development",
							"System Architecture",
						].map((interest, index) => (
							<motion.li
								key={interest}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.6 + index * 0.1, ease: "easeOut" }}
								className="flex items-center gap-3 text-custom-text-tertiary text-base sm:text-lg"
							>
								<div className="w-2 h-2 rounded-full bg-gradient-to-r from-custom-blue to-custom-accent-cyan" />
								{interest}
							</motion.li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
}

function ExpertiseSection() {
	const expertise = [
		{
			icon: FaServer,
			title: "Backend Development",
			description: "Building robust, scalable server-side applications with modern frameworks and best practices.",
			color: "from-custom-blue to-custom-accent-purple",
		},
		{
			icon: FaCode,
			title: "Web Development",
			description: "Creating responsive, performant web applications with cutting-edge technologies.",
			color: "from-custom-accent-purple to-custom-accent-pink",
		},
		{
			icon: FaRocket,
			title: "System Design",
			description: "Architecting efficient systems and solving complex computational challenges.",
			color: "from-custom-accent-cyan to-custom-accent-blue",
		},
	];

	return (
		<section className="w-full min-h-[calc(100vh-5rem-4rem)] flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 overflow-x-hidden relative">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-center mb-8 sm:mb-12 md:mb-16"
			>
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6">
					What I Do
				</h2>
				<div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan mx-auto rounded-full" />
			</motion.div>

			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
				{expertise.map((item, index) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
						whileHover={{ y: -8 }}
						className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-custom-blue/50 transition-colors group"
					>
						<div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${item.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
							<item.icon className="size-7 sm:size-8 text-custom-text-primary" />
						</div>
						<h3 className="text-xl sm:text-2xl font-bold text-custom-text-primary mb-3 sm:mb-4">{item.title}</h3>
						<p className="text-custom-text-tertiary text-sm sm:text-base leading-relaxed">
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}

function SocialSection() {
	return (
		<section id="connect" className="w-full min-h-[calc(100vh-5rem-4rem)] flex flex-col justify-center items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative overflow-hidden">
			<motion.div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[500px] lg:w-[600px] h-80 sm:h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-custom-accent-purple/10 to-custom-blue/10 rounded-full blur-3xl pointer-events-none"
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
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-center mb-8 sm:mb-12 relative z-10 w-full"
			>
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6">
					Let's Connect
				</h2>
				<div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan mx-auto rounded-full mb-4 sm:mb-6" />
				<p className="text-base sm:text-lg md:text-xl text-custom-text-tertiary max-w-2xl mx-auto px-4">
					Interested in my work or want to collaborate? Feel free to reach out on any of these platforms.
				</p>
			</motion.div>

			<div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-stretch gap-6 sm:gap-6 lg:gap-8 relative z-10 max-w-full px-4 sm:px-0">
				{socials.map((social, index) => (
					<motion.div
						key={social.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
						whileHover={{ scale: 1.02, y: -8 }}
						className="w-full max-w-sm sm:max-w-none sm:w-auto"
					>
						<SocialLinkBadge {...social}/>
					</motion.div>
				))}
			</div>
		</section>
	);
}
