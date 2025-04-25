"use client";

import * as Ui from "@/lib/components/ui/";
import React from "react";

export default function NavigationBar() {
	return (
		<div className="flex flex-row items-center h-14 m-4 mt-3 mb-0 rounded-lg p-4 bg-gradient-to-r from-custom-light-blue to-custom-green">
			<div>
				Home
			</div>
			<Ui.ThemeToggle className="ml-auto"/>
		</div>
	);
}
