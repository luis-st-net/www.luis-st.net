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
		<div className="w-full flex flex-col items-center">
			<HeroSection/>
			<AboutSection/>
			<ExpertiseSection/>
			<SocialSection/>
		</div>
	);
}

function HeroSection() {
	return (
		<section className="w-full h-[calc(100vh-5rem-4rem)] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
			<motion.div
				className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-custom-blue/20 via-custom-accent-purple/15 to-transparent rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					x: [0, 100, 0],
					y: [0, 50, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			<motion.div
				className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-custom-accent-cyan/20 via-custom-accent-pink/15 to-transparent rounded-full blur-3xl"
				animate={{
					scale: [1, 1.3, 1],
					x: [0, -80, 0],
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
					className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
				>
					<span className="block mb-2">Hi, I'm</span>
					<span className="gradient-text">Luis Staudt</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="text-xl sm:text-2xl md:text-3xl text-custom-white-tertiary font-medium mb-12 max-w-3xl mx-auto"
				>
					Software Developer & Computer Science Student
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="flex flex-wrap justify-center gap-4 mb-16"
				>
					<a
						className="group px-8 py-4 rounded-xl bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan font-bold text-white text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-custom-blue/50"
					>
						Let's Connect
					</a>
					<a
						href="https://github.com/Luis-St"
						className="px-8 py-4 rounded-xl glass border-2 border-custom-blue/50 font-bold text-custom-light-blue text-lg transition-all hover:scale-105 hover:border-custom-blue hover:bg-custom-blue/10"
					>
						View Projects
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
					className="flex justify-center gap-6 flex-wrap"
				>
					{[FaJava, SiDocker, SiTypescript, SiReact, SiKotlin].map((Icon, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: 0.8 + index * 0.1, ease: "easeOut" }}
							className="p-4 rounded-xl glass border border-white/10 hover:border-custom-blue/50 transition-colors"
						>
							<Icon className="size-8 text-custom-light-blue" />
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
		<section className="w-full h-[calc(100vh-5rem-4rem)] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-center mb-16"
			>
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
					About Me
				</h2>
				<div className="w-24 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan mx-auto rounded-full" />
			</motion.div>

			<div className="grid md:grid-cols-2 gap-8 items-start">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="glass rounded-2xl p-8 border border-white/10 hover:border-custom-blue/30 transition-colors"
				>
					<h3 className="text-2xl font-bold text-custom-light-blue mb-6">Background</h3>
					<p className="text-custom-white-tertiary text-lg leading-relaxed mb-4">
						I'm a {age}-year-old software developer and computer science student at the University of Furtwangen in Germany.
						My passion lies in crafting elegant solutions to complex problems.
					</p>
					<p className="text-custom-white-tertiary text-lg leading-relaxed">
						With expertise spanning from backend development to modern web applications,
						I continuously explore emerging technologies and push the boundaries of what's possible in software engineering.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="glass rounded-2xl p-8 border border-white/10 hover:border-custom-blue/30 transition-colors"
				>
					<h3 className="text-2xl font-bold text-custom-light-blue mb-6">Interests & Focus</h3>
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
								className="flex items-center gap-3 text-custom-white-tertiary text-lg"
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
		<section className="w-full h-[calc(100vh-5rem-4rem)] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-center mb-16"
			>
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
					What I Do
				</h2>
				<div className="w-24 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan mx-auto rounded-full" />
			</motion.div>

			<div className="grid md:grid-cols-3 gap-8">
				{expertise.map((item, index) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
						whileHover={{ y: -8 }}
						className="glass rounded-2xl p-8 border border-white/10 hover:border-custom-blue/50 transition-colors group"
					>
						<div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
							<item.icon className="size-8 text-white" />
						</div>
						<h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
						<p className="text-custom-white-tertiary text-base leading-relaxed">
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
		<section id="connect" className="w-full h-[calc(100vh-5rem-4rem)] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
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
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-center mb-16 relative z-10"
			>
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
					Let's Connect
				</h2>
				<div className="w-24 h-1 bg-gradient-to-r from-custom-blue via-custom-accent-purple to-custom-accent-cyan mx-auto rounded-full mb-6" />
				<p className="text-xl text-custom-white-tertiary max-w-2xl mx-auto">
					Interested in my work or want to collaborate? Feel free to reach out on any of these platforms.
				</p>
			</motion.div>

			<div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 relative z-10">
				{socials.map((social, index) => (
					<motion.div
						key={social.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
						whileHover={{ scale: 1.05, y: -8 }}
					>
						<SocialLinkBadge {...social}/>
					</motion.div>
				))}
			</div>
		</section>
	);
}
