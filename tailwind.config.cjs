const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.css'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
				sofia: ['Sofia', ...defaultTheme.fontFamily.serif],
				arizonia: ['Arizonia', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: []
};
