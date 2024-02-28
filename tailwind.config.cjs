/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    	'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors:{
				accent: {
					1: "hsl(288 95.8% 90.6%)",
					2: "hsl(168 83.8% 78.2%)",
				},
				bkg: "hsl(210 40% 98%)",
				content: "hsl(217 32.6% 17.5%)",
				/* accent:{
					1: "hsl(var(--color-accent1) / <alpha-value>)",
					2: "hsl(var(--color-accent2) / <alpha-value>)"
				},
				bkg: "hsl(var(--color-bkg) / <alpha-value>)",
				content: "hsl(var(--color-content) / <alpha-value>)" */
			},
			animation: {
				"spin-lower": "spin 35s ease infinity",
				"spin-slow": "spn 25s ease-in-out infinite reverse",
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animated')
	],
	darkMode: "class",
}
