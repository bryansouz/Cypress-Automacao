const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    webpackConfig: "  webpack.config.js",
    chromeWebSecurity: false,
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {

    },
  },
});

