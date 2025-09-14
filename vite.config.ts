/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./setup.ts",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@/shared": path.resolve(__dirname, "./src/shared"),
			"@/modules": path.resolve(__dirname, "./src/modules"),
			"@/config": path.resolve(__dirname, "./src/config"),
		},
	},
});
