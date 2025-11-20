// @ts-check
import lottie from "astro-integration-lottie";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		lottie(),
	],
	vite: {
		assetsInclude: ["**/*.lottie"],
	}
});
