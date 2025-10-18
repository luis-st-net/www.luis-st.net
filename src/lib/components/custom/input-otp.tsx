"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { motion } from "framer-motion";
import { cn } from "@/lib/utility";

const InputOTP = React.forwardRef<
	React.ElementRef<typeof OTPInput>,
	React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
	<OTPInput
		ref={ref}
		containerClassName={cn("flex items-center gap-2", containerClassName)}
		className={cn("disabled:cursor-not-allowed", className)}
		{...props}
	/>
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex items-center gap-2", className)} {...props} />
	)
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => {
	const inputOTPContext = React.useContext(OTPInputContext);
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

	return (
		<div
			ref={ref}
			className={cn(
				"relative flex h-12 w-12 items-center justify-center",
				"rounded-xl glass border border-white/20",
				"text-base font-semibold text-white",
				"transition-all duration-300",
				"shadow-lg",
				isActive && "border-white/40 shadow-xl shadow-custom-blue/20",
				className
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
					className="pointer-events-none absolute inset-0 flex items-center justify-center"
				>
					<div className="h-6 w-px bg-white" />
				</motion.div>
			)}
		</div>
	);
});
InputOTPSlot.displayName = "InputOTPSlot";

export { InputOTP, InputOTPGroup, InputOTPSlot };
