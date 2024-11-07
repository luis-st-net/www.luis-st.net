import React from "react";
import { usePathname } from "next/navigation";

export default function ({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{children}
		</div>
	);
}