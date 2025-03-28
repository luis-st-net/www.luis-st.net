import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import "./code-block.css";

declare global {
	interface Window {
		prismLanguagesLoaded?: boolean;
	}
}

export default function CodeBlock(
	{ code, language, showLineNumbers = true, title }: { code: string; language: string; showLineNumbers?: boolean; title?: string },
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
						() => import("prismjs/components/prism-jsx"),
						() => import("prismjs/components/prism-typescript"),
						() => import("prismjs/components/prism-tsx"),
						() => import("prismjs/components/prism-css"),
						() => import("prismjs/components/prism-scss"),
						() => import("prismjs/components/prism-python"),
						() => import("prismjs/components/prism-java"),
						() => import("prismjs/components/prism-bash"),
						() => import("prismjs/components/prism-json"),
						() => import("prismjs/components/prism-markdown"),
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
		<div className="code-block-wrapper">
			{title && (
				<div className="code-block-title">
					<span>{title}</span>
				</div>
			)}
			<pre className={"language-" + language}>
				<code className={"language-" + language}>{code}</code>
			</pre>
		</div>
	);
}
