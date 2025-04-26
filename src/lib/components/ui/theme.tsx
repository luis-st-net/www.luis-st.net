"use client";

import * as Ui from "@/lib/components/ui/";
import * as Icons from "lucide-react";
import * as React from "react";
import { HTMLAttributes } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export function ThemeProvider(
	{ children, ...props }: React.ComponentProps<typeof NextThemesProvider>,
) {
	return (
		<NextThemesProvider {...props}>
			{children}
		</NextThemesProvider>
	);
}

export function ThemeToggle(
	{ className, ...props }: HTMLAttributes<HTMLDivElement> & { className?: string },
) {
	const { setTheme } = useTheme();
	
	return (
		<div className={className} {...props}>
			<Ui.DropdownMenu>
				<Ui.DropdownMenuTrigger asChild>
					<Ui.Button variant="outline" size="icon" className="size-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent sm:size-11">
						<Icons.Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
						<Icons.Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
						<span className="sr-only">Toggle theme</span>
					</Ui.Button>
				</Ui.DropdownMenuTrigger>
				<Ui.DropdownMenuContent align="center">
					<Ui.DropdownMenuItem onClick={() => setTheme("light")}>
						Light
					</Ui.DropdownMenuItem>
					<Ui.DropdownMenuItem onClick={() => setTheme("dark")}>
						Dark
					</Ui.DropdownMenuItem>
					<Ui.DropdownMenuItem onClick={() => setTheme("system")}>
						System
					</Ui.DropdownMenuItem>
				</Ui.DropdownMenuContent>
			</Ui.DropdownMenu>
		</div>
	);
}

