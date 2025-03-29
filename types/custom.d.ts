declare module "*.css" {
	const content: { [className: string]: string };
	export default content;
}

declare module "prismjs/components/*" {
	const content: any;
	export default content;
}

declare module "prismjs/themes/*" {
	const content: any;
	export default content;
}
