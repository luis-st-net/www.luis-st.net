"use client";

import * as Ui from "@/lib/components/ui/";
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utility";

export default function NavigationBar() {
	return (
		<div className="h-20 flex flex-row items-center p-2 bg-custom-dark-blue sm:p-4">
			<div className="w-full flex flex-row items-center justify-start gap-4 sm:justify-center sm:gap-8 custom-lg:gap-14">
				<PageLink title="Home" href="/"/>
				<PageLink title="Projects" href="https://github.com/Luis-St"/>
				<PageLink title="Skills"/>
				<PageLink title="Imprint" className="hidden xs:block"/>
				<PageLink title="Contact" className="hidden xs:block"/>
			</div>
			<Ui.ThemeToggle className="hidden nano:block"/>
		</div>
	);
}

function PageLink(
	{ title, href, className, ...props }: Omit<React.ComponentProps<typeof Link>, "href"> & { title: string, href?: string },
) {
	return (
		<Link href={href ? href : "/" + title.toLowerCase()} className={cn("text-lg text-custom-white-primary xs:text-xl sm:text-2xl custom-lg:text-3xl", className)} {...props}>
			<strong>
				{title}
			</strong>
		</Link>
	);
}
