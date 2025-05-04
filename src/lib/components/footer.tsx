import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utility";

export default function Footer() {
	return (
		<div className="h-10 flex flex-row items-center justify-between p-2 bg-custom-dark-blue sm:p-4">
			<div className="text-sm text-custom-white-primary">
				© {new Date().getFullYear()}{" "}
				<span>Luis Staudt</span>
			</div>
			<div className="flex gap-4">
				<PageLink title="Imprint"/>
				<PageLink title="Contact"/>
			</div>
		</div>
	);
}

function PageLink(
	{ title, href, className, ...props }: Omit<React.ComponentProps<typeof Link>, "href"> & { title: string, href?: string },
) {
	return (
		<Link href={href ? href : "/" + title.toLowerCase()} className={cn("text-sm text-custom-white-primary", className)} {...props}>
			{title}
		</Link>
	);
}
