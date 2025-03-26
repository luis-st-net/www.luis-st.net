import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CodeBlock(
	{ code, language, showLineNumbers = true, title }: { code: string; language: string; showLineNumbers?: boolean; title?: string },
) {
	const { resolvedTheme } = useTheme();
	const [theme, setTheme] = useState<"dark" | "light">(resolvedTheme === "dark" ? "dark" : "light");
	
	useEffect(() => {
		if (typeof window === "undefined") return;
		
		const isDarkMode = document.documentElement.classList.contains("dark");
		setTheme(isDarkMode ? "dark" : "light");
		
		const handleThemeChange = () => {
			const newIsDarkMode = document.documentElement.classList.contains("dark");
			setTheme(newIsDarkMode ? "dark" : "light");
		};
		
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === "attributes" && mutation.attributeName === "class") {
					handleThemeChange();
				}
			});
		});
		
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"]
		});
		
		return () => {
			observer.disconnect();
		};
	}, []);
	
	useEffect(() => {
		if (typeof window === "undefined") return;
		
		let prismInstance: any = null;
		
		const loadDependencies = async () => {
			try {
				const Prism = (await import('prismjs')).default;
				
				document.querySelectorAll("link[href*=\"prism\"], style[data-prism]").forEach(el => {
					el.remove();
				});
				prismInstance = Prism;
				
				await Promise.all([
					import("prismjs/components/prism-json"),
					import("prismjs/components/prism-typescript"),
					import("prismjs/components/prism-csharp"),
					import("prismjs/components/prism-rust"),
					import("prismjs/components/prism-markup"),
					import("prismjs/components/prism-sql")
				]);
				
				setTimeout(() => {
					Prism.highlightAll();
					console.log("Highlighted code");
				}, 0);
			} catch (error) {
				console.error("Error loading Prism:", error);
			}
		};
		
		loadDependencies();
	}, []);
	
	useEffect(() => {
		if (typeof window === "undefined") return;
		
		console.log("Theme changed:", theme);
		
		const highlightCode = async () => {
			try {
				const { default: Prism } = await import("prismjs");
				
				await import("prismjs/components/prism-sql");
				
				document.querySelectorAll("link[href*=\"prism\"], style[data-prism]").forEach(el => {
					el.remove();
				});
				
				setTimeout(() => {
					Prism.highlightAll();
					console.log("Highlighted code");
				}, 0);
			} catch (error) {
				console.error("Error highlighting code:", error);
			}
		};
		
		highlightCode();
	}, [theme]);
	
	return (
		<div className="code-block-wrapper hydrated">
			{title && (
				<div className="code-block-title">
					<span>{title}</span>
				</div>
			)}
			<pre className={`${showLineNumbers ? "line-numbers" : ""} language-${language}`}>
				<code className={`language-${language}`}>{code}</code>
        	</pre>
		</div>
	);
}