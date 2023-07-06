const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: "Resultados",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  env: {
    baseURLDev: "https://vivo.dev.gateway.zup.me/easy/v3/",
    /* base url que tem da api e o video caso tenha algum video pela api*/ video: false,
    accesApplicationDev: "9ee5250079eb013539b2000d3ac06d76",

    reporter: "cypress-mochawesome-reporter",
  },
});