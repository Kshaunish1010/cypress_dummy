const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl:"http://localhost:3000",
    baseUrl:"https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});