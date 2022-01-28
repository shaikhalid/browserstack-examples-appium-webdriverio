var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  port: 4723,
  specs: [
    "./test/specs/e2e/e2e.spec.js",
    "./test/specs/login/*.spec.js",
    "./test/specs/offers/*.spec.js",
    "./test/specs/user/*.spec.js",
    "./test/specs/cart/*.spec.js",
  ],

  capabilities: [
    {
      maxInstances: 1,
      device: "Google Pixel 5",
      os_version: "11.0",
      app: "/bin/<androidAppName>",
      autoGrantPermissions: true,
      platformName: "Android",
    },
  ],

  services: ["appium"],
};

exports.config = _.defaultsDeep(overrides, defaults.config);
