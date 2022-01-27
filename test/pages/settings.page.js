const Page = require("./page");

class SettingsPage extends Page {
  get btnUrlTab() {
    return $("~url-tab");
  }

  get txtUrlInput() {
    return $("~url-input");
  }

  get btnUpdateConfiguration() {
    return $("~update-configuration-button");
  }

  async openUrlTab() {
    await (await this.btnUrlTab).click();
  }

  async setUrl(url) {
    await (await this.txtUrlInput).setValue(url);
  }

  async updateConfiguration() {
    await (await this.btnUpdateConfiguration).click();
  }
}

module.exports = new SettingsPage();
