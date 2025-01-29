// for ts file import { defineConfig } from "cypress";
// const { defineConfig } = require("cypress");
// const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
// export default defineConfig({
//   e2e: {
//     //baseUrl: 'https://www.google.com/',
//     baseUrl: "https://www.automationexercise.com/",
//     chromeWebSecurity: false,
//     video: true,
//     setupNodeEvents(on, config) {
//       on('task', {downloadFile}
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    //baseUrl: "https://www.automationexercise.com/",
    baseUrl: "https://www.saucedemo.com/v1/",
    chromeWebSecurity: false,
    video: true,
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
  },
});
