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
				"vedette": 'vedette 4s linear infinite',
				"pro": 'pro 3s linear infinite',
				"bg-button": 'bgButton 2.5s linear infinite',
				"bg-section": 'bgSection 5s linear infinite',
			},
			keyframes: {
				vedette: {
					'25%': { transform: 'translateX(-100px)' },
					'50%': { transform: 'translateY(200px)' },
					'75%': { transform: 'translate(100px,100px)' }

				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				pro: {
					'50%': {
						"background-color": '#4f46e5',
						"color": '#fff',
					}
				},
				bgButton: {
					"0%": {
						"background-position": "0% 50%"
					},
					"50%": {
						"background-position": "100% 50%"
					},
					"100%": {
						"background-position": "0% 50%"
					}
				},
				bgSection: {
					"0%": {
						"background-position": "0% 0%"
					},
					"50%": {
						"background-position": "0% 100%"
					},
					"100%": {
						"background-position": "0% 0%"
					}
				}
			},
		},
	},
	plugins: [],
	darkMode: 'selector',
}