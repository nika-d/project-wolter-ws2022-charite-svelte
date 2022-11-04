/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	},
	preview: {
		port: 3000
	},
	test: {
		globals: true
	}
}

export default config
