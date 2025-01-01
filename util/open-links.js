import open from "open";

const urls = [
	"https://ui.shadcn.com/docs/components/accordion",
	"https://lucide.dev/icons/categories",
	"https://tailwindcss.com/docs/aspect-ratio",
];

(async () => {
	for (const url of urls) {
		await open(url, { app: { name: "firefox" } });
	}
})();
