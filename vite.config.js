import { resolve } from "path";

export default {
	root: resolve(__dirname, "src"),
	build: {
		outDir: "../dist",
		rollupOptions: {
			input: {
				index: resolve(__dirname, "src/index.html"),
				introPage: resolve(__dirname, "src/pages/introductionPage.html"),
				homePage: resolve(__dirname, "src/pages/homePage.html"),
				tradePage: resolve(__dirname, "src/pages/trade.html"),
			},
		},
	},
	server: {
		port: 8080,
	},
	publicDir: resolve(__dirname, "public"),
};
