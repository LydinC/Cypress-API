const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    'X-RapidAPI-Key': '5707eacf0cmsh0eb9923f3330517p167561jsn236dd708abdb',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  },
  e2e: {
    baseUrl: "https://covid-193.p.rapidapi.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
