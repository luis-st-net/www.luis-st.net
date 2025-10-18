"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utility";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		const [isFocused, setIsFocused] = React.useState(false);

		return (
			<div className="relative">
				{/* Glow effect on focus */}
				<motion.div
					className="absolute -inset-0.5 bg-gradient-to-r from-custom-light-blue/50 via-custom-accent-purple/50 to-custom-accent-cyan/50 rounded-xl opacity-0 blur-lg"
					animate={{ opacity: isFocused ? 0.6 : 0 }}
					transition={{ duration: 0.3 }}
				/>

				<textarea
					className={cn(
						"flex min-h-[80px] w-full rounded-xl px-4 py-3",
						"glass border border-white/20",
						"bg-custom-secondary/50 dark:bg-custom-tertiary/50",
						"text-base text-white",
						"placeholder:text-white/50",
						"focus:outline-none focus:border-white/40",
						"transition-all duration-300",
						"shadow-lg hover:shadow-xl",
						"disabled:cursor-not-allowed disabled:opacity-50",
						"resize-vertical",
						className
					)}
					ref={ref}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					{...props}
				/>
			</div>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };
