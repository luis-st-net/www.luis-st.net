"use client";

import * as React from "react";
import { cn } from "@/lib/utility";

const Separator = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		orientation?: "horizontal" | "vertical";
		decorative?: boolean;
	}
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
	<div
		ref={ref}
		role={decorative ? "none" : "separator"}
		aria-orientation={decorative ? undefined : orientation}
		className={cn(
			"shrink-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
			orientation === "horizontal" ? "h-[2px] w-full" : "h-full w-[2px]",
			className
		)}
		{...props}
	/>
));
Separator.displayName = "Separator";

export { Separator };
