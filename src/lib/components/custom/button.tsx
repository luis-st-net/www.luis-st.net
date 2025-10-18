"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utility";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "ghost";
	size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "default", disabled, children, type, onClick, ...props }, ref) => {
		return (
			<motion.button
				whileHover={{ scale: disabled ? 1 : 1.02 }}
				whileTap={{ scale: disabled ? 1 : 0.98 }}
				transition={{ type: "spring", stiffness: 400, damping: 20 }}
				className={cn(
					"relative inline-flex items-center justify-center rounded-xl",
					"font-semibold transition-all duration-300",
					"focus:outline-none",
					"disabled:opacity-50 disabled:cursor-not-allowed",
					"overflow-hidden group",

					// Variant styles
					variant === "default" && [
						"glass border border-white/20 hover:border-white/40",
						"bg-gradient-to-r from-custom-light-blue/80 via-custom-accent-purple/80 to-custom-accent-cyan/80",
						"text-white shadow-lg hover:shadow-2xl hover:shadow-custom-blue/30",
					],
					variant === "outline" && [
						"glass border border-white/30 hover:border-white/50",
						"bg-transparent text-white",
						"shadow-lg hover:shadow-xl",
					],
					variant === "ghost" && [
						"bg-transparent text-white",
						"hover:bg-white/10",
					],

					// Size styles
					size === "default" && "h-11 px-6 py-2",
					size === "sm" && "h-9 px-4 text-sm",
					size === "lg" && "h-12 px-8 text-lg",
					size === "icon" && "h-10 w-10",

					className
				)}
				ref={ref}
				disabled={disabled}
				type={type}
				onClick={onClick}
			>
				{/* Gradient overlay on hover */}
				{variant === "default" && (
					<div className="absolute inset-0 bg-gradient-to-r from-custom-blue/30 via-custom-accent-purple/30 to-custom-accent-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				)}

				{variant === "outline" && (
					<div className="absolute inset-0 bg-gradient-to-r from-custom-light-blue/10 via-custom-accent-purple/10 to-custom-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				)}

				{/* Content */}
				<span className="relative z-10">{children}</span>

				{/* Shine effect */}
				{!disabled && variant !== "ghost" && (
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
						initial={{ x: "-100%" }}
						whileHover={{ x: "200%" }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						style={{ transform: "skewX(-20deg)" }}
					/>
				)}
			</motion.button>
		);
	}
);
Button.displayName = "Button";

export { Button };
