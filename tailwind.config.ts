import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				"nano": "16rem",
				"micro": "20rem",
				"tiny": "22.5rem",
				"xxs": "25rem",
				"xs": "30rem",
				"custom-lg": "61.25rem",
				"3xl": "112rem",
				"4xl": "128rem",
			},
			borderRadius: {
				"2xl": "calc(var(--radius) + 4px)",
				xl: "calc(var(--radius) + 2px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				language: {
					java: "var(--language-java)",
					python: "var(--language-python)",
					javascript: "var(--language-javascript)",
					typescript: "var(--language-typescript)",
					csharp: "var(--language-csharp)",
					cpp: "var(--language-cpp)",
					shell: "var(--language-shell)",
					kotlin: "var(--language-kotlin)",
					groovy: "var(--language-groovy)",
					sql: "var(--language-sql)",
					html: "var(--language-html)",
					css: "var(--language-css)",
				},
				framework: {
					spring: "var(--framework-spring)",
					"asp-dot-net": "var(--framework-asp-dot-net)",
					react: "var(--framework-react)",
					"next-js": "var(--framework-next-js)",
					"vue-js": "var(--framework-vue-js)",
					tailwind: "var(--framework-tailwind)",
					"java-fx": "var(--framework-java-fx)",
					wpf: "var(--framework-wpf)",
					qt: "var(--framework-qt)",
					unity: "var(--framework-unity)",
				},
				"build-system": {
					gradle: "var(--build-system-gradle)",
					maven: "var(--build-system-maven)",
					vite: "var(--build-system-vite)",
				},
				"development-tool": {
					jetbrains: "var(--development-tool-jetbrains)",
					eclipse: "var(--development-tool-eclipse)",
					npm: "var(--development-tool-npm)",
					git: "var(--development-tool-git)",
					"ci-cd": "var(--development-tool-ci-cd)",
					docker: "var(--development-tool-docker)",
					postman: "var(--development-tool-postman)",
					postgresql: "var(--development-tool-postgresql)",
				},
				custom: {
					primary: "var(--custom-primary)",
					secondary: "var(--custom-secondary)",
					tertiary: "var(--custom-tertiary)",
					quaternary: "var(--custom-quaternary)",
					accent: {
						blue: "var(--custom-accent-blue)",
						green: "var(--custom-accent-green)",
						yellow: "var(--custom-accent-yellow)",
						orange: "var(--custom-accent-orange)",
						red: "var(--custom-accent-red)",
					},
					light: {
						blue: "var(--custom-light-blue)",
						gray: "var(--custom-light-gray)",
					},
					dark: {
						blue: "var(--custom-dark-blue)",
						green: "var(--custom-dark-green)",
						red: "var(--custom-dark-red)",
						gray: "var(--custom-dark-gray)",
					},
					blue: "var(--custom-blue)",
					green: "var(--custom-green)",
					yellow: "var(--custom-yellow)",
					orange: "var(--custom-orange)",
					red: "var(--custom-red)",
					gray: "var(--custom-gray)",
					anthracite: "var(--custom-anthracite)",
					white: {
						DEFAULT: "var(--custom-white)",
						primary: "var(--custom-white-primary)",
						secondary: "var(--custom-white-secondary)",
						tertiary: "var(--custom-white-tertiary)",
					},
					black: {
						DEFAULT: "var(--custom-black)",
						primary: "var(--custom-black-primary)",
						secondary: "var(--custom-black-secondary)",
						tertiary: "var(--custom-black-tertiary)",
					},
				},
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				chart: {
					"1": "var(--chart-1)",
					"2": "var(--chart-2)",
					"3": "var(--chart-3)",
					"4": "var(--chart-4)",
					"5": "var(--chart-5)",
				},
				sidebar: {
					DEFAULT: "var(--sidebar-background)",
					foreground: "var(--sidebar-foreground)",
					primary: "var(--sidebar-primary)",
					"primary-foreground": "var(--sidebar-primary-foreground)",
					accent: "var(--sidebar-accent)",
					"accent-foreground": "var(--sidebar-accent-foreground)",
					border: "var(--sidebar-border)",
					ring: "var(--sidebar-ring)",
				},
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"collapsible-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-collapsible-content-height)",
					},
				},
				"collapsible-up": {
					from: {
						height: "var(--radix-collapsible-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.4s ease",
				"collapsible-up": "collapsible-up 0.4s ease",
			},
			transitionDuration: {
				"400": "400ms",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
