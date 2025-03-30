"use client";

import * as Ui from "@/lib/components/ui/";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import ContentPane from "@/lib/components/content-pane";
import Link from "next/link";
import { SocialLink } from "@/lib/types";
import CodeBlock from "@/lib/components/code-block";

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
			"java bytecode",
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
			<div className="m-10 flex flex-col items-center 2xl:flex-row">
				<div className="w-[30rem] flex flex-col items-center 2xl:max-w-[50%] 2xl:items-start">
					<h2 className="text-2xl mb-8">
						Hey, I'm
					</h2>
					<h1 className="text-4xl font-bold mb-8">
						Luis
					</h1>
					<p className="text-lg mb-4 2xl:w-2/3">
						a software developer and computer science student at the University of Furtwangen.
						I'm passionate about software development and constantly exploring emerging technologies.
						I've mastered several programming languages.
						While my expertise primarily lies in backend development, I'm also proficient in developing web applications.
					</p>
				</div>
				<div>
					<CodeBlock language="json" className="w-fit xl:w-full">
						{me}
					</CodeBlock>
				</div>
			</div>
			
			<div className="flex flex-col mt-96">
				<div className="text-4xl mb-6">
					Socials
				</div>
				<div className="flex flex-row flex-wrap gap-10">
					<SocialLinkPane {...github}/>
					<SocialLinkPane {...linkedin}/>
					<SocialLinkPane {...discord}/>
				</div>
			</div>
		</div>
	);
	
}

function SocialLinkPane(
	{ icon: Icon, href, title, username, description }: SocialLink,
) {
	return (
		<Link href={href}>
			<ContentPane className="mt-0 mb-0 w-[22rem] transition-transform hover:scale-105">
				<div className="flex flex-row items-center">
					<Icon className="size-20"/>
					<div className="ml-3.5 mt-1 mb-1">
						<p className="text-lg font-bold">
							{title}
						</p>
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

function getAgeFromBirthdate(): number {
	const birthdate = new Date(2004, 3, 11);
	const today = new Date();
	
	let years = today.getFullYear() - birthdate.getFullYear();
	if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
		years--;
	}
	return years;
}
