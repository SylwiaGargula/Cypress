const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app.interviewme.pl/login',
    viewportHeight: 1000,
    viewportWidth: 1900,
  },
});
