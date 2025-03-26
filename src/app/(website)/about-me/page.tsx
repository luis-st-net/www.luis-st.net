"use client";

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

const java = `
public class Me {
    public static void main(String[] args) {
		System.out.println("Hello World!");
	}
}
`;

export default function () {
	return (
		<div className="w-3/4">
			<div className="flex flex-row m-10">
				<div className="flex flex-col max-w-[30%]">
					<h2 className="text-2xl mb-6">
						Hey, I'm
					</h2>
					<h1 className="text-4xl mb-6">
						Luis
					</h1>
					<p className="text-lg mb-4">
						I'm a software developer and computer science student at the University of Furtwangen.
						Developing software and exploring new technologies brings me great joy.
						My toolkit includes a variety of programming languages for different projects.
						I prefer to develop backend applications but I also have experience in developing web applications.
					</p>
				</div>
				<div>
					<CodeBlock language="java" code={java}/>
				</div>
			</div>
			<div className="flex flex-row gap-10">
				<SocialLinkPane {...github}/>
				<SocialLinkPane {...linkedin}/>
				<SocialLinkPane {...discord}/>
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
