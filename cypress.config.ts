import { defineConfig } from 'cypress'

export default defineConfig({
	scrollBehavior: false,

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	}
})
