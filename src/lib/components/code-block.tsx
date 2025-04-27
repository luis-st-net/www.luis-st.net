import * as Ui from "@/lib/components/ui/";
import React, { HTMLAttributes, useEffect } from "react";
import { useTheme } from "next-themes";
import "./code-block.css";

import { cn } from "@/lib/utility";

declare global {
	interface Window {
		prismLanguagesLoaded?: boolean;
	}
}

export default function CodeBlock(
	{ children, language, title, className, ...props }: HTMLAttributes<HTMLDivElement> & { language: string, title?: string, children: string },
) {
	const { resolvedTheme } = useTheme();
	
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		
		const initializePrism = async () => {
			try {
				const { default: Prism } = await import("prismjs");
				
				if (!window.prismLanguagesLoaded) {
					const languageImports = [
						() => import("prismjs/components/prism-javascript"),
						() => import("prismjs/components/prism-typescript"),
						() => import("prismjs/components/prism-css"),
						() => import("prismjs/components/prism-python"),
						() => import("prismjs/components/prism-java"),
						() => import("prismjs/components/prism-json"),
						() => import("prismjs/components/prism-sql"),
						() => import("prismjs/components/prism-csharp"),
						() => import("prismjs/components/prism-rust"),
						() => import("prismjs/components/prism-markup"),
					];
					
					await Promise.all(languageImports.map(importFn => importFn()));
					window.prismLanguagesLoaded = true;
				}
				
				requestAnimationFrame(() => {
					Prism.highlightAll();
				});
			} catch (error) {
				console.error("Error initializing Prism:", error);
			}
		};
		
		(async () => {
			await initializePrism();
		})();
	}, [resolvedTheme]);
	
	return (
		<div className={className} {...props}>
			{title && (
				<div className="py-2 px-4 overflow-hidden font-mono bg-custom-secondary dark:bg-custom-tertiary">
					{title}
				</div>
			)}
			{title && (
				<Ui.Separator className="h-[2px] bg-custom-quaternary"/>
			)}
			<pre className={cn("m-0 rounded-md p-2 pt-4 pb-4 bg-custom-secondary dark:bg-custom-tertiary font-code overflow-auto", "language-" + language)}>
				<code className={cn("text-xs text-wrap sm:text-base", "language-" + language)}>
					{children}
				</code>
			</pre>
		</div>
	);
}
