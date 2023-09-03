const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 3000,
  e2e: {
    baseUrl: 'https://shefpovar63.ru/',
    setupNodeEvents(on, config) {
    },
  },
});
