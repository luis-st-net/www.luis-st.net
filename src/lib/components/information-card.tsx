"use client";

import React from "react";

export default function InformationCard(
	{ intro, title, children }: { intro: string; title: string; children: React.ReactNode },
) {
	return (
		<div className="w-full flex flex-col items-center p-8 sm:w-[30rem] 2xl:max-w-[50%] 2xl:items-start">
			<h3 className="text-2xl mb-8">
				{intro}
			</h3>
			<h1 className="text-6xl mb-8">
				<strong>
					{title}
				</strong>
			</h1>
			<p className="text-lg text-center mb-4 sm:text-left 2xl:w-2/3">
				{children}
			</p>
		</div>
	);
}
