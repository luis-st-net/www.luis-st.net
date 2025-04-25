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

export const languages: Skill[] = [
	java, python, javascript, typescript, csharp, cpp, shell, kotlin, groovy,
];
export const frameworks: Skill[] = [
	spring, aspDotNet, react, nextjs, javaFx, wpf, qt, vuejs, tailwind, unity,
];
export const skills: Skill[] = [
	...languages,
	...frameworks,
];
