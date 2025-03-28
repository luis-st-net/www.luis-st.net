import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import "./code-block.css";

declare global {
	interface Window {
		prismLanguagesLoaded?: boolean;
	}
}

export default function CodeBlock(
	{ code, language, showLineNumbers = true, title }: { code: string; language?: string; showLineNumbers?: boolean; title?: string },
) {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const initializePrism = async () => {
			try {
				// Load Prism core
				const { default: Prism } = await import("prismjs");

				// Load language components only once
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

				// Highlight code after a brief delay to ensure styles are applied
				requestAnimationFrame(() => {
					Prism.highlightAll();
				});
			} catch (error) {
				console.error("Error initializing Prism:", error);
			}
		};

		initializePrism();
	}, [resolvedTheme]);

	const normalizedLanguage = language?.toLowerCase() || "javascript";

	return (
		<div className={"code-block-wrapper"}>
			{title && (
				<div className="code-block-title">
					<span>{title}</span>
				</div>
			)}
			<pre className={`language-${normalizedLanguage}`}>
				<code className={`language-${normalizedLanguage}`}>{code}</code>
			</pre>
		</div>
	);
}
