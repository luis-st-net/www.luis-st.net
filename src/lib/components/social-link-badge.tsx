import { SocialLink } from "@/lib/types";
import Link from "next/link";
import ContentPane from "@/lib/components/content-pane";
import React from "react";

export default function SocialLinkBadge(
	{ icon: Icon, href, title, username, description }: SocialLink,
) {
	return (
		<Link href={href}>
			<ContentPane defaultSpacing={false} defaultColor={true} className="w-48 transition-transform micro:w-72 xs:w-96 xs:hover:scale-105">
				<div className="flex flex-row items-center p-3 xs:p-4">
					<Icon className="size-12 tiny:size-14 xs:size-20"/>
					<div className="ml-3.5 my-0.5 tiny:my-1">
						<h5 className="text-base tiny:text-lg">
							<strong>
								{title}
							</strong>
						</h5>
						<p className="text-xs tiny:text-sm">
							{username}
						</p>
						<p className="text-xs tiny:text-sm">
							{description}
						</p>
					</div>
				</div>
			</ContentPane>
		</Link>
	);
}
