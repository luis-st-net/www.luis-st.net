import { SocialLink } from "@/lib/types";
import Link from "next/link";
import ContentPane from "@/lib/components/content-pane";
import React from "react";

export default function SocialLinkBadge(
	{ icon: Icon, href, title, username, description }: SocialLink,
) {
	return (
		<Link href={href}>
			<ContentPane defaultColor={true} className="w-[18rem] mt-0 mb-0 transition-transform xs:w-[22rem] xs:hover:scale-105">
				<div className="flex flex-row items-center">
					<Icon className="size-14 xs:size-20"/>
					<div className="ml-3.5 mt-1 mb-1">
						<h5 className="text-lg">
							<strong>
								{title}
							</strong>
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
