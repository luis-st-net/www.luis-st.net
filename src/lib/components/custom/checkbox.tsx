"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utility";

export interface CheckboxProps {
	checked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	disabled?: boolean;
	name?: string;
	onBlur?: () => void;
	className?: string;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
	({ checked, onCheckedChange, disabled, className, ...props }, ref) => {
		return (
			<button
				type="button"
				role="checkbox"
				aria-checked={checked}
				onClick={() => !disabled && onCheckedChange?.(!checked)}
				disabled={disabled}
				ref={ref}
				className={cn(
					"peer h-5 w-5 shrink-0 rounded-md",
					"glass border-2 border-white/30",
					"transition-all duration-200",
					"focus:outline-none focus:ring-2 focus:ring-custom-light-blue/50 focus:ring-offset-2 focus:ring-offset-background",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"relative overflow-hidden",
					checked && "bg-gradient-to-br from-custom-light-blue to-custom-accent-purple border-transparent",
					className
				)}
				{...props}
			>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
					transition={{ type: "spring", stiffness: 400, damping: 20 }}
					className="flex items-center justify-center"
				>
					<Check className="h-4 w-4 text-white" strokeWidth={3} />
				</motion.div>
			</button>
		);
	}
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
