"use client";

import * as Ui from "@/lib/components/ui/";
import React from "react";
import Link from "next/link";

export default function NavigationBar() {
	return (
		<div className="h-20 flex flex-row items-center p-2 bg-custom-dark-blue sm:p-4">
			<div className="w-full flex flex-row items-center justify-start gap-4 sm:justify-center sm:gap-8 custom-lg:gap-14">
				<PageLink title="Home" href="/"/>
				<PageLink title="Projects" href="https://github.com/Luis-St"/>
				<PageLink title="Skills"/>
				<PageLink title="Imprint"/>
				<PageLink title="Contact"/>
			</div>
			<Ui.ThemeToggle/>
		</div>
	);
}

function PageLink(
	{ title, href } : { title: string, href?: string },
) {
	return (
		<Link href={href ? href : "/" + title.toLowerCase()} className="text-lg font-bold text-custom-white-primary sm:text-xl custom-lg:text-3xl">
			{title}
		</Link>
	);
}
