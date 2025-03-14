import React from "react";

export default function ContentPane(
	{ children }: { children: React.ReactNode },
) {
	return (
		<div className="relative mt-4">
			<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-custom-light-blue to-custom-green blur-[8px] opacity-80"></div>
			<div className="relative rounded-lg p-0.5 bg-gradient-to-r from-custom-light-blue to-custom-green">
				<div className="rounded-md bg-custom-secondary p-4">
					{children}
				</div>
			</div>
		</div>
	);
}
