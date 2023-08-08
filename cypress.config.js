const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gpc3ef",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/user",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    failOnStatusCode: false
  },
});
