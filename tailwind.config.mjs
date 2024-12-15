import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				figtree: ['Figtree Variable', ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				"grid": "inset -2px -2px 2px #181a321a,inset 3px 3px 3px #fff,6px 6px 12px #10111b0a",
				"line": "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px inset, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px inset;"
			}
		},
	},
	plugins: [],
}
