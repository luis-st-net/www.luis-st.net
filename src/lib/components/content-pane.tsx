import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function ContentPane(
	{ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
) {
	return (
		<div className={cn("relative mt-4", className)}>
			<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-custom-light-blue to-custom-green blur-[8px] opacity-80"></div>
			<div className="relative rounded-lg p-0.5 bg-gradient-to-r from-custom-light-blue to-custom-green">
				<div className="rounded-md bg-custom-secondary p-4">
					{children}
				</div>
			</div>
		</div>
	);
}
