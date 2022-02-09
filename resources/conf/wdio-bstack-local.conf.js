var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: ["./test/specs/local/local.spec.js"],

  capabilities: [
    {
      maxInstances: 1,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID,
      autoGrantPermissions: true,
      platformName: "Android",
      "browserstack.local": true,
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
