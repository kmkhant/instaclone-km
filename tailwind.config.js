module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("tailwind-scrollbar"),
		require("tailwind-scrollbar-hide"),
	],
};
