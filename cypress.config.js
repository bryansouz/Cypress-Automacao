const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
     
    },
  },
});

