exports.config = {
  port: 4723,
  specs: ["./test/specs/e2e/e2e.spec.js"],
  exclude: [],
  capabilities: [
    {
      maxInstances: 1,
      device: "Google Pixel 5",
      os_version: "11.0",
      app: "/bin/<androidAppName>",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    // Use the below capabilities if running for iOS app
    // {
    //   maxInstances: 1,
    //   device: "iPhone 12 Pro",
    //   os_version: "14",
    //   app: "/bin/<iOSAppName>",
    //   gpsEnabled: "true",
    //   automationName: "XCUITest",
    //   platformName: "iOS",
    // },
  ],

  logLevel: "warn",
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 240000,
  connectionRetryCount: 3,
  services: ["appium"],
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
    if (error) {
      await driver.takeScreenshot();
    }
  },
};
