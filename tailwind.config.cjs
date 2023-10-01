/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bluePrimary: '#030712',
				blueSecondary: '#111827',
				purplePrimary: '#6c63ff',
			},
		},
	},
	plugins: [],
}
