import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		link: React.CSSProperties;
		logo: React.CSSProperties;
		title: React.CSSProperties;
		small: React.CSSProperties;
		text: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		link?: React.CSSProperties;
		logo?: React.CSSProperties;
		title?: React.CSSProperties;
		small?: React.CSSProperties;
		text?: React.CSSProperties;
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		link: true;
		logo: true;
		title: true;
		small: true;
		text: true;
	}
}

const themeSettings = {
	typography: {
		fontFamily: ["Inter", "sans-serif"].join(","),
		link: {
			fontSize: 16,
			color: "#000000",
			fontWeight: 500,
		},
		logo: {
			fontSize: 24,
			fontFamily: "Lobster",
			color: "#000000",
		},
		title: {
			fontSize: 24,
			fontWeight: 600,
			color: "#000000",
			lineHeight: "30px",
		},
		small: {
			fontSize: 14,
			fontWeight: 500,
			color: "rgba(0, 0, 0, 0.6)",
		},
		h2: {
			fontSize: 60,
			fontWeight: 600,
			color: "#000000",
		},
		h3: {
			fontSize: 36,
			fontWeight: 600,
			color: "#000000",
		},
		caption: {
			fontSize: 12,
			fontWeight: 500,
			letterSpacing: "0.1rem",
			color: "#000000",
		},
		text: {
			fontSize: 17,
			fontWeight: 400,
			color: "rgba(0, 0, 0, 0.6)",
		},
	},
};

export const theme = createTheme(themeSettings);
