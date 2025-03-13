"use client";

import * as Ui from "@/lib/components/ui/";
import React from "react";
import { usePathname } from "next/navigation";
import * as Routes from "@/lib/routes";
import { Route } from "@/lib/types";

export default function NavigationBar() {
	const path = usePathname().split("/").filter(s => s.length > 0);
	
	return (
		<div className="flex flex-row items-center h-14 m-4 mt-3 rounded-lg p-4 pr-2 bg-gradient-to-r from-custom-light-blue to-custom-green">
			<Breadcrumb path={path}/>
			<Ui.ThemeToggle className="ml-auto"/>
		</div>
	);
}

function Breadcrumb(
	{ path }: { path: string[] },
) {
	const previousRoutes = Routes.getPreviousRoutes(path);
	
	return (
		<Ui.Breadcrumb>
			<Ui.BreadcrumbList>
				{previousRoutes.map((route, index) => {
					return (
						<BreadcrumbItem key={index} path={path} route={route} index={index}/>
					);
				})}
				<ActiveBreadcrumbItem path={path}/>
			</Ui.BreadcrumbList>
		</Ui.Breadcrumb>
	);
}

function BreadcrumbItem(
	{ path, route, index }: { path: string[], route: Route, index: number },
) {
	const url = "/" + path.slice(0, index).join("/");
	
	return (
		<>
			<Ui.BreadcrumbItem>
				<Ui.BreadcrumbLink href={url} className="text-custom-black text-base">
					{route.title}
				</Ui.BreadcrumbLink>
			</Ui.BreadcrumbItem>
			<Ui.BreadcrumbSeparator className="text-custom-black"/>
		</>
	);
}

function ActiveBreadcrumbItem(
	{ path }: { path: string[] },
) {
	const route = Routes.getRoute(path);
	const parallelRoutes = Routes.getParallelRoutes(path);
	
	if (parallelRoutes.length === 0) {
		return (
			<Ui.BreadcrumbItem>
				<Ui.BreadcrumbPage className="text-custom-black text-base">
					{route.title}
				</Ui.BreadcrumbPage>
			</Ui.BreadcrumbItem>
		);
	}
	return (
		<Ui.BreadcrumbItem>
			<Ui.DropdownMenu>
				<Ui.DropdownMenuTrigger className="flex items-center gap-1 outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0">
					<Ui.BreadcrumbPage className="text-custom-black text-base transition-colors hover:text-foreground">
						{route.title}
					</Ui.BreadcrumbPage>
				</Ui.DropdownMenuTrigger>
				<Ui.DropdownMenuContent align="start">
					{parallelRoutes.map((route, index) => {
						return (
							<DropdownMenuItem key={index} path={path} route={route}/>
						);
					})}
				</Ui.DropdownMenuContent>
			</Ui.DropdownMenu>
		</Ui.BreadcrumbItem>
	);
}

function DropdownMenuItem(
	{ path, route }: { path: string[], route: Route },
) {
	const currentPath = "/" + path.slice(0, path.length - 1).join("/");
	const url = currentPath.length === 1 ? route.route : currentPath + route.route;
	
	return (
		<Ui.DropdownMenuItem>
			<Ui.BreadcrumbLink href={url} className="text-sm">
				{route.title}
			</Ui.BreadcrumbLink>
		</Ui.DropdownMenuItem>
	);
}


