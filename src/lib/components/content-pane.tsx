import React, { HTMLAttributes } from "react";

import { cn } from "@/lib/utility";

export default function ContentPane(
	{ children, defaultColor = false, defaultSpacing = true, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: React.ReactNode, defaultColor?: boolean, defaultSpacing?: boolean },
) {
	const { isGradient, gradientType, gradientFrom, gradientTo, isStaticColor, staticColor, classes } = findClassesForShadow(className);
	
	let shadowClasses = "";
	
	if (isStaticColor) {
		shadowClasses = staticColor;
	} else if (isGradient) {
		shadowClasses = gradientType + " " + gradientFrom + " " + gradientTo;
	} else if (defaultColor) {
		shadowClasses = "bg-custom-blue";
	} else {
		throw new Error("Expected either a static color ('bg-*') or a gradient color ('bg-gradient-to-*', 'from-*', 'to-*') for the shadow.");
	}
	
	return (
		<div className={cn("relative", defaultSpacing && "mt-16 mb-8", classes)} {...props}>
			<div className={cn("absolute inset-0 rounded-xl blur-[8px] opacity-80", shadowClasses)}/>
			<div className={cn("relative rounded-lg p-0.5", shadowClasses)}>
				<div className={cn("rounded-md bg-custom-secondary", defaultSpacing && "p-4")}>
					{children}
				</div>
			</div>
		</div>
	);
}

function findClassesForShadow(
	className?: string | undefined,
) {
	const classes = className?.split(" ") || [];
	
	const containsGradientType = classes.some((cls) => cls.startsWith("bg-gradient-to-"));
	const containsGradientFrom = classes.some((cls) => cls.startsWith("from-"));
	const containsGradientTo = classes.some((cls) => cls.startsWith("to-"));
	
	const gradientType = containsGradientType ? classes.find((cls) => cls.startsWith("bg-gradient-to-")) : "";
	const gradientFrom = containsGradientFrom ? classes.find((cls) => cls.startsWith("from-")) : "";
	const gradientTo = containsGradientTo ? classes.find((cls) => cls.startsWith("to-")) : "";
	
	const color = classes.find((cls) => cls.startsWith("bg-")) || "";
	const filteredClasses = classes.filter((cls) => !cls.startsWith("bg-gradient-to-") && !cls.startsWith("from-") && !cls.startsWith("to-") && !cls.startsWith("bg-"));
	
	return {
		isGradient: containsGradientType && containsGradientFrom && containsGradientTo,
		gradientType: gradientType,
		gradientFrom: gradientFrom,
		gradientTo: gradientTo,
		isStaticColor: color !== "",
		staticColor: color,
		classes: filteredClasses,
	};
}
