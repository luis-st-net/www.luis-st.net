import { Skill } from "@/lib/types";

// Programming languages
const java: Skill = {
	type: "language",
	name: "Java",
	experience: "Expert",
	description: "Well, that's the language i have used the most. There are only a few things for which I haven't yet used java.",
	color: {
		background: "bg-language-java",
		text: "text-language-java",
	},
};
const python: Skill = {
	type: "language",
	name: "Python",
	experience: "Experienced",
	description: "The worst language i have used, primarily for a lot of small scripts and projects. Whoever thinks Python is meant for something else should go to hell.",
	color: {
		background: "bg-language-python",
		text: "text-language-python",
	},
};
const javascript: Skill = {
	type: "language",
	name: "JavaScript",
	experience: "Advanced",
	description: "Don't know what to write here, because it's the language typescript is based on.",
	color: {
		background: "bg-language-javascript",
		text: "text-language-javascript",
	},
};
const typescript: Skill = {
	type: "language",
	name: "TypeScript",
	experience: "Advanced",
	description: "Used as primary language for the most of my web projects such as this website or my rest API.",
	color: {
		background: "bg-language-typescript",
		text: "text-language-typescript",
	},
};
const csharp: Skill = {
	type: "language",
	name: "C#",
	experience: "Advanced",
	description: "Main programming language at work. Used privately for developing small utility programs under Windows and for exploring the Unity game engine.",
	color: {
		background: "bg-language-csharp",
		text: "text-language-csharp",
	},
};
const cpp: Skill = {
	type: "language",
	name: "C++",
	experience: "Experienced",
	description: "Learned at university. Used for developing a small raspberry pi project. Unfortunately, there are no more projects but i have plans to use C++ in future projects.",
	color: {
		background: "bg-language-cpp",
		text: "text-language-cpp",
	},
};
const shell: Skill = {
	type: "language",
	name: "Shell",
	experience: "Experienced",
	description: "Language i use daily in the terminal. I'm more familiar with the linux shell, but also have some experience with the Windows shell.",
	color: {
		background: "bg-language-shell",
		text: "text-language-shell",
	},
};
const kotlin: Skill = {
	type: "language",
	name: "Kotlin",
	experience: "Beginner",
	description: "Current language used for the Gradle scripts of my Java projects. Maintaining simple build scripts/pipelines.",
	color: {
		background: "bg-language-kotlin",
		text: "text-language-kotlin",
	},
};
const groovy: Skill = {
	type: "language",
	name: "Groovy",
	experience: "Beginner",
	description: "Implemented and maintained Gradle build scripts for Java projects. Configured build pipelines before migrating to Kotlin DSL.",
	color: {
		background: "bg-language-groovy",
		text: "text-language-groovy",
	},
};
const sql: Skill = {
	type: "language",
	name: "SQL",
	experience: "Advanced",
	description: "The language i learned at university to retrieve data from a database. Not modern but practical. I prefer to use modern ORMs like Hibernate or Entity Framework.",
	color: {
		background: "bg-language-sql",
		text: "text-language-sql",
	},
};
const html: Skill = {
	type: "language",
	name: "HTML",
	experience: "Expert",
	description: "Well not a programming language, but i have used it for all my websites. I know how to use it and how to use it correctly.",
	color: {
		background: "bg-language-html",
		text: "text-language-html",
	},
};
const css: Skill = {
	type: "language",
	name: "CSS",
	experience: "Advanced",
	description: "Yea, not a programming language, but i need it to make this look good. I now the most thinks about CSS, but i personally prefer to use Tailwind CSS.",
	color: {
		background: "bg-language-css",
		text: "text-language-css",
	},
};

// Frameworks
const spring: Skill = {
	type: "framework",
	name: "Spring",
	experience: "Experienced",
	description: "Primarily used at work for developing web applications, rest APIs and other microservices.",
	color: {
		background: "bg-framework-spring",
		text: "text-framework-spring",
	},
};
const aspDotNet: Skill = {
	type: "framework",
	name: "ASP.NET",
	experience: "Experienced",
	description: "Implemented and maintained web applications using ASP.NET Core at work. Developed the authentication Rest API for my own website using ASP.NET Core.",
	color: {
		background: "bg-framework-asp-dot-net",
		text: "text-framework-asp-dot-net",
	},
};
const react: Skill = {
	type: "framework",
	name: "React",
	experience: "Advanced",
	description: "All my websites using React under the hood of Next.js.",
	color: {
		background: "bg-framework-react",
		text: "text-framework-react",
	},
};
const nextjs: Skill = {
	type: "framework",
	name: "Next.js",
	experience: "Advanced",
	description: "Server side rendering framework which i use for all my websites.",
	color: {
		background: "bg-framework-next-js",
		text: "text-framework-next-js",
	},
};
const vuejs: Skill = {
	type: "framework",
	name: "Vue.js",
	experience: "Experienced",
	description: "I used it for an online signing website. A friend asked me to develop it for him.",
	color: {
		background: "bg-framework-vue-js",
		text: "text-framework-vue-js",
	},
};
const tailwind: Skill = {
	type: "framework",
	name: "Tailwind CSS",
	experience: "Advanced",
	description: "I personally do not like CSS at all, but Tailwind CSS is a great framework to work with. I use it for all my websites.",
	color: {
		background: "bg-framework-tailwind",
		text: "text-framework-tailwind",
	},
};
const javaFx: Skill = {
	type: "framework",
	name: "JavaFX",
	experience: "Experienced",
	description: "Used for a project at university and to build a few small desktop applications for myself.",
	color: {
		background: "bg-framework-java-fx",
		text: "text-framework-java-fx",
	},
};
const wpf: Skill = {
	type: "framework",
	name: "WPF",
	experience: "Proficient",
	description: "Desktop framework i have used a lot at work for all internal applications.",
	color: {
		background: "bg-framework-wpf",
		text: "text-framework-wpf",
	},
};
const qt: Skill = {
	type: "framework",
	name: "Qt",
	experience: "Beginner",
	description: "I read up on the framework because I wanted to help a friend with his semester project. I have not built anything with it yet.",
	color: {
		background: "bg-framework-qt",
		text: "text-framework-qt",
	},
};
const unity: Skill = {
	type: "framework",
	name: "Unity",
	experience: "Proficient",
	description: "Game engine i have used to test my skills and knowledge in writing shaders and improve my math skills.",
	color: {
		background: "bg-framework-unity",
		text: "text-framework-unity",
	},
};

// Build system
const gradle: Skill = {
	type: "build-system",
	name: "Gradle",
	experience: "Experienced",
	description: "The build system i use for all of my java projects. I have used it for a lot of projects at work and for my own projects.",
	color: {
		background: "bg-build-system-gradle",
		text: "text-build-system-gradle",
	},
};
const maven: Skill = {
	type: "build-system",
	name: "Maven",
	experience: "Beginner",
	description: "The build system i have been forced to use at work. I don't like maven at all because it feels outdated with the XML configuration files.",
	color: {
		background: "bg-build-system-maven",
		text: "text-build-system-maven",
	},
};
const vite: Skill = {
	type: "build-system",
	name: "Vite",
	experience: "Beginner",
	description: "I am very new to this build system, i have used it until today only in one project.",
	color: {
		background: "bg-build-system-vite",
		text: "text-build-system-vite",
	},
};

// Development tools
const jetbrains: Skill = {
	type: "development-tool",
	name: "JetBrains",
	experience: "Advanced",
	description: "The IDEs i love the most. IntelliJ, Rider, WebStorm, PyCharm, CLion, and all the other IDEs from JetBrains are my favorite tools to work with.",
	color: {
		background: "bg-development-tool-jetbrains",
		text: "text-development-tool-jetbrains",
	},
};
const eclipse: Skill = {
	type: "development-tool",
	name: "Eclipse",
	experience: "Expert",
	description: "The IDE i have used until i discovered the JetBrains IDEs. If you use this IDE, i have questions!",
	color: {
		background: "bg-development-tool-eclipse",
		text: "text-development-tool-eclipse",
	},
};
const npm: Skill = {
	type: "development-tool",
	name: "Npm",
	experience: "Proficient",
	description: "The package manager i use for all my Web projects. I have used it for a lot of projects at work and for my private projects.",
	color: {
		background: "bg-development-tool-npm",
		text: "text-development-tool-npm",
	},
};
const git: Skill = {
	type: "development-tool",
	name: "Git",
	experience: "Expert",
	description: "The must use tool for every developer. What would i do without it, properly suffer a lot because i delete some important lines without a option to recover them.",
	color: {
		background: "bg-development-tool-git",
		text: "text-development-tool-git",
	},
};
const ciCd: Skill = {
	type: "development-tool",
	name: "CI/CD",
	experience: "Experienced",
	description: "I have used it for a lot of projects at work and for my private projects. I'm familiar with the standard pipelines for java, javascript and c# projects.",
	color: {
		background: "bg-development-tool-ci-cd",
		text: "text-development-tool-ci-cd",
	},
};
const docker: Skill = {
	type: "development-tool",
	name: "Docker",
	experience: "Experienced",
	description: "A tool i love and hate at the same time. I moved from 'it works on my machine' to 'it works in my container'.",
	color: {
		background: "bg-development-tool-docker",
		text: "text-development-tool-docker",
	},
};
const postman: Skill = {
	type: "development-tool",
	name: "Postman",
	experience: "Experienced",
	description: "The tool i spent a lot of time to debug Rest APIs. I love it, but i hate it when i have to use it (this means something it's not working).",
	color: {
		background: "bg-development-tool-postman",
		text: "text-development-tool-postman",
	},
};
const postgresql: Skill = {
	type: "development-tool",
	name: "PostgreSQL",
	experience: "Experienced",
	description: "My favorite database. Used whenever i need a database.",
	color: {
		background: "bg-development-tool-postgresql",
		text: "text-development-tool-postgresql",
	},
};

export const languages: Skill[] = [
	java, python, javascript, typescript, csharp, cpp, shell, kotlin, groovy, sql, html, css,
];
export const frameworks: Skill[] = [
	spring, aspDotNet, react, nextjs, javaFx, wpf, qt, vuejs, tailwind, unity,
];
export const buildSystems: Skill[] = [
	gradle, maven, vite,
];
export const developmentTools: Skill[] = [
	jetbrains, eclipse, npm, git, ciCd, docker, postman, postgresql,
];
export const skills: Skill[] = [
	...languages,
	...frameworks,
	...buildSystems,
	...developmentTools,
];
