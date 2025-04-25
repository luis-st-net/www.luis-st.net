import { SocialLink } from "@/lib/types";
import Link from "next/link";
import ContentPane from "@/lib/components/content-pane";
import React from "react";

export default function SocialLinkBadge(
	{ icon: Icon, href, title, username, description }: SocialLink,
) {
	return (
		<Link href={href}>
			<ContentPane defaultColor={true} className="mt-0 mb-0 w-[22rem] transition-transform hover:scale-105">
				<div className="flex flex-row items-center">
					<Icon className="size-20"/>
					<div className="ml-3.5 mt-1 mb-1">
						<h5 className="text-lg font-bold">
							{title}
						</h5>
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
