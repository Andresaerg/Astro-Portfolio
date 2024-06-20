/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    	'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		fontFamily: {
			'anta' : ["Anta", "sans-serif"],
			'sono' : ["Sono", "sans-serif"]
		},
		extend: {
			animation: {
				'border-animation': 'border-animation 2s linear infinite',
			},
			keyframes: {
				'border-animation': {
					'0%': { 'background-position': '0%' },
					'100%': { 'background-position': '400%' },
				},
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animated')
	],
	darkMode: "class",
}
