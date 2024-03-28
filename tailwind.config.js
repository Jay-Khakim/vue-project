module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"weather-primary": "#00668A",
				"weather-secondary": "#004E71",
			},
		},
		fontFamily: {
			Roboto: ["Roboto, sans-serif"],
		},
		container: {
			padding: "2rem",
			center: true,
		},
		screens: {
			sm: "640px",
			md: "768px",
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},
				"no-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
				},
			};

			addUtilities(newUtilities)
		},
	],
};
