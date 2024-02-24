/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    	'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors:{
				accent:{
					1: "hsl(var(--color-accent1) / <alpha-value>)",
					2: "hsl(var(--color-accent2) / <alpha-value>)"
				},
				bkg: "hsl(var(--color-bkg) / <alpha-value>)",
				content: "hsl(var(--color-content) / <alpha-value>)"
			},
			animation: {
				"spin-lower": "spin 35s ease infinity",
				"spin-slow": "spn 25s ease-in-out infinite reverse",
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
	darkMode: "class",
}
