import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			height: {
				navbar: "var(--navbar-h)",
			},
			colors: {
				accent: "rgba(var(--accent-rgb), 255)",
				border: "rgba(var(--border-rgb), 255)",
			},
			transitionDuration: {
				custom: "var(--transition-duration-custom)",
			},
			transitionTimingFunction: {
				"in-out-custom": "var(--ease-in-out-custom)",
				"in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
				"in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
			},
		},
	},
	plugins: [],
};
export default config;
