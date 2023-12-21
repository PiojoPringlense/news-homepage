/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				base: "15px",
				button: "13px",
				newsTitle: "20px",
				listTitle: "17px",
				menuDesktop: "16px",
				menuMobile: "17px",
				headerDesktop: "56px",
				headerMobile: "41px",
				newsHeadDesktop: "36px",
				newsHeadMobile: "30px",
				listHeadDesktop: "31px",
				listHeadMobile: "29px",
			},
			colors: {
				primary: {
					orange: "hsl(35, 77%, 62%)",
					red: "hsl(5, 85%, 63%)",
				},
				neutral: {
					100: "hsl(36, 100%, 99%)",
					400: "hsl(233, 8%, 79%)",
					600: "hsl(236, 13%, 42%)",
					900: "hsl(240, 100%, 5%)",
				},
			},
		},
	},
	plugins: [],
};
