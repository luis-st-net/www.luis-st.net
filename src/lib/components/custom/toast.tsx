"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utility";

export type ToastVariant = "default" | "destructive";

export interface Toast {
	id: string;
	title?: string;
	description?: string;
	variant?: ToastVariant;
	duration?: number;
}

interface ToastContextType {
	toasts: Toast[];
	toast: (toast: Omit<Toast, "id">) => void;
	dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [toasts, setToasts] = React.useState<Toast[]>([]);

	const toast = React.useCallback((newToast: Omit<Toast, "id">) => {
		const id = Math.random().toString(36).substring(7);
		const toastWithId = { ...newToast, id };

		setToasts((prev) => [...prev, toastWithId]);

		// Auto dismiss after duration
		const duration = newToast.duration || 5000;
		setTimeout(() => {
			dismiss(id);
		}, duration);
	}, []);

	const dismiss = React.useCallback((id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	return (
		<ToastContext.Provider value={{ toasts, toast, dismiss }}>
			{children}
			<Toaster />
		</ToastContext.Provider>
	);
}

export function useToast() {
	const context = React.useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
}

function Toaster() {
	const { toasts, dismiss } = useToast();

	return (
		<div className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px] gap-4 pointer-events-none">
			<AnimatePresence>
				{toasts.map((toast) => (
					<ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
				))}
			</AnimatePresence>
		</div>
	);
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
	const isDestructive = toast.variant === "destructive";

	return (
		<motion.div
			initial={{ opacity: 0, y: 50, scale: 0.9 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
			transition={{ type: "spring", stiffness: 400, damping: 25 }}
			className={cn(
				"pointer-events-auto relative rounded-2xl p-4 pr-12",
				"glass border shadow-2xl overflow-hidden",
				"min-w-[300px] group",
				isDestructive
					? "border-red-500/40 shadow-red-500/20"
					: "border-white/20 shadow-custom-blue/20"
			)}
		>
			{/* Gradient overlay */}
			<div className={cn(
				"absolute inset-0 bg-gradient-to-br opacity-50",
				isDestructive
					? "from-red-500/20 via-transparent to-red-600/20"
					: "from-custom-light-blue/10 via-custom-accent-purple/10 to-custom-accent-cyan/10"
			)} />

			{/* Content */}
			<div className="relative z-10">
				{toast.title && (
					<div className={cn(
						"font-bold mb-1 text-base",
						isDestructive ? "text-red-400" : "text-white"
					)}>
						{toast.title}
					</div>
				)}
				{toast.description && (
					<div className="text-sm text-white/80">
						{toast.description}
					</div>
				)}
			</div>

			{/* Close button */}
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => onDismiss(toast.id)}
				className={cn(
					"absolute top-4 right-4 rounded-lg p-1",
					"hover:bg-white/10 transition-colors",
					isDestructive ? "text-red-400" : "text-white/70 hover:text-white"
				)}
			>
				<X className="h-4 w-4" />
			</motion.button>

			{/* Shine effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
				initial={{ x: "-100%" }}
				animate={{ x: "200%" }}
				transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
				style={{ transform: "skewX(-20deg)" }}
			/>
		</motion.div>
	);
}
