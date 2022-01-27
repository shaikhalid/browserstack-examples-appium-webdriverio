var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  onBrowserstack: true,

  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_ACCESSKEY,

  specs: [
    "./test/specs/e2e/e2e.spec.js",
    "./test/specs/login/*.spec.js",
    "./test/specs/offers/*.spec.js",
    "./test/specs/user/*.spec.js",
    "./test/specs/cart/*.spec.js",
  ],

  capabilities: [
    {
      name:
        require("minimist")(process.argv.slice(2))["bstack-session-name"] ||
        "default_name",
      build:
        process.env.BROWSERSTACK_BUILD_NAME ||
        "browserstack-examples-appium-webdriverio" +
          " - " +
          new Date().getTime(),
      project: "browserstack-examples-appium-webdriverio",
      maxInstances: 2,
      device: "Google Pixel 5",
      os_version: "11.0",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID,
      autoGrantPermissions: true,
      platformName: "Android",
    },
  ],

  logLevel: "warn",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 240000,
  connectionRetryCount: 3,
  services: ["browserstack"],
  framework: "mocha",
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],
  mochaOpts: {
    ui: "bdd",
    timeout: 240000,
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (require("minimist")(process.argv.slice(2))["bstack-session-name"]) {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionName", "arguments": {"name":"' +
          require("minimist")(process.argv.slice(2))["bstack-session-name"] +
          '" }}',
        []
      );
    } else {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionName", "arguments": {"name":"' +
          test.title +
          '" }}',
        []
      );
    }

    if (passed) {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}',
        []
      );
    } else {
      await driver.takeScreenshot();
      await browser.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}',
        []
      );
    }
  },
};

exports.config = _.defaultsDeep(overrides, defaults.config);
