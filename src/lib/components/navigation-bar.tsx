"use client";

import * as Ui from "@/lib/components/ui/";
import React from "react";
import Link from "next/link";

export default function NavigationBar() {
	return (
		<div className="flex flex-row items-center h-20 p-4 bg-custom-dark-blue">
			<div className="w-full flex flex-row items-center justify-center gap-14">
				<PageLink title="Home" href="/"/>
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
		<Link href={href ? href : "/" + title.toLowerCase()} className="text-3xl font-bold text-custom-white-primary">
			{title}
		</Link>
	);
}
