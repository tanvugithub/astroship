/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			//custom class
			fontFamily: {
				sans: [
					'Inter Variable',
					'Inter',
					'ui-sans-serif',
					'system-ui, sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'Segoe UI Symbol',
					'"Noto Color Emoji"',
				]
			},
			fontSize: {
				"100": "100px"
			},
			animation: {
				marquee: 'marquee 40s linear infinite',
				marquee2: 'marquee2 40s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
		},
	},
	plugins: [],
}