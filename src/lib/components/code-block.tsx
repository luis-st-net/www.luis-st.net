import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CodeBlock(
	{ code, language, showLineNumbers = true, title }: { code: string; language?: string; showLineNumbers?: boolean; title?: string },
) {
	const { resolvedTheme } = useTheme();
	
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		
		let prismInstance: any = null;
		
		const loadDependencies = async () => {
			try {
				const Prism = (await import("prismjs")).default;
				
				document.querySelectorAll("link[href*=\"prism\"], style[data-prism]").forEach(el => {
					el.remove();
				});
				
				prismInstance = Prism;
				
				if (resolvedTheme === "dark") {
					await import("prismjs/themes/prism-tomorrow.css");
				} else {
					await import("prismjs/themes/prism.css");
				}
				
				await Promise.all([
					import("prismjs/components/prism-javascript"),
					import("prismjs/components/prism-jsx"),
					import("prismjs/components/prism-typescript"),
					import("prismjs/components/prism-tsx"),
					import("prismjs/components/prism-css"),
					import("prismjs/components/prism-scss"),
					import("prismjs/components/prism-python"),
					import("prismjs/components/prism-java"),
					import("prismjs/components/prism-bash"),
					import("prismjs/components/prism-json"),
					import("prismjs/components/prism-markdown"),
					import("prismjs/components/prism-sql"),
					import("prismjs/components/prism-csharp"),
					import("prismjs/components/prism-rust"),
					import("prismjs/components/prism-markup"),
				]);
				
				setTimeout(() => {
					Prism.highlightAll();
				}, 0);
			} catch (error) {
				console.error("Error loading Prism:", error);
			}
		};
		
		loadDependencies();
	}, []);
	
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		
		const highlightCode = async () => {
			try {
				const { default: Prism } = await import("prismjs");
				
				document.querySelectorAll("link[href*=\"prism\"], style[data-prism]").forEach(el => {
					el.remove();
				});
				
				if (resolvedTheme === "dark") {
					await import("prismjs/themes/prism-tomorrow.css");
				} else {
					await import("prismjs/themes/prism.css");
				}
				
				setTimeout(() => {
					Prism.highlightAll();
				}, 0);
			} catch (error) {
				console.error("Error highlighting code:", error);
			}
		};
		
		highlightCode().then(r => r);
	}, [resolvedTheme]);
	
	const normalizedLanguage = language?.toLowerCase() || "javascript";
	
	return (
		<div className={"code-block-wrapper"}>
			{title && (
				<div className="code-block-title">
					<span>{title}</span>
				</div>
			)}
			<pre className={`${showLineNumbers ? "line-numbers" : ""} language-${normalizedLanguage}`}>
				<code className={`language-${normalizedLanguage}`}>{code}</code>
        	</pre>
		</div>
	);
}
