"use client";

import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import ContentPane from "@/lib/components/content-pane";
import { SocialLink } from "@/lib/types";
import CodeBlock from "@/lib/components/code-block";
import { getAgeFromBirthdate } from "@/lib/utility";
import InformationCard from "@/lib/components/information-card";
import SocialLinkBadge from "@/lib/components/social-link-badge";

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
		<div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center m-8 2xl:flex-row">
			<InformationCard intro="Hi, I'm" title="Luis">
				I'm a software developer and computer science student at the University of Furtwangen.
				I'm passionate about software development and constantly exploring emerging technologies.
				I've mastered several programming languages.
				While my expertise primarily lies in backend development, I'm also proficient in developing web applications.
			</InformationCard>
			<ContentPane defaultColor={true} defaultSpacing={false} className="hidden xs:block">
				<CodeBlock language="json" className="w-fit xl:w-full">
					{me}
				</CodeBlock>
			</ContentPane>
		</div>
	);
}

function SocialSection() {
	return (
		<div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center m-8 2xl:flex-row">
			<InformationCard intro="My" title="Socials">
				if you're interested in my work or want to connect, feel free to reach out to me on any platform.
			</InformationCard>
			<div className="flex flex-col flex-wrap gap-8 sm:gap-12 lg:gap-16">
				{socials.map((social) => (
					<SocialLinkBadge key={social.title} {...social}/>
				))}
			</div>
		</div>
	);
}
