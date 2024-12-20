import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/src/e2e/**/*.cy.{js,ts,jsx,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
