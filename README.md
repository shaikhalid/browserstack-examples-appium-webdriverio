![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# BrowserStack Examples Appium WebdriverIO <a href="https://webdriver.io/"><img src="https://avatars.githubusercontent.com/u/72550141?s=48&v=4" alt="WebdriverIO" height="22" /></a> <a href="https://nodejs.org/en/"><img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-icon-logo.png" alt="nodejs" height="22" /></a> <a href="https://mochajs.org/"><img src="https://brandslogos.com/wp-content/uploads/images/large/mocha-logo.png" alt="mochs" height="22" /></a>

## Introduction

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.

This BrowserStack Example repository demonstrates a WebdriverIO tests framework written in Mocha and nodeJS with parallel testing capabilities. The WebdriverIO test scripts are written for the open source [todo](todo).This BrowserStack Demo Mobile App is an e-commerce mobile application which showcases multiple real-world user scenarios. The app is bundled with offers data, orders data and products data that contains everything you need to start using the app and run tests out-of-the-box.

The WebDriverIO tests are run on different platforms like on-prem and BrowserStack using various run configurations and test capabilities.

---

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
  - NodeJS >= 16.11.1 (includes npm 8.0.0)

- Run below command to configure dependencies

    ```sh
    npm install
    ```
## About the tests in this repository

This repository contains the following WebdriverIO tests:
| Module   | Test name                          | Description |
| ---      | ---                                | --- |
| E2E      | OrderTest                       | This test scenario verifies successful product purchase lifecycle end-to-end. It demonstrates the [Page Object Model design pattern](https://www.browserstack.com/guide/page-object-model-in-selenium) and is also the default test executed in all the single test run profiles. |
| Login    | LoginTest                       | This test verifies the login workflow with different types of valid login users. |
| Login    | LoginFailTest                   | This test verifies the login workflow error. |
| Login    | LoginDataDrivenTest             | This test verifies the login for all error cases in a datadriven way |
| Login    | LoginDataDrivenReadFromCSVTest  | This test verifies the login for all error cases in a datadriven way with CSV-file  |
| Login    | LoginRequestedTest              | This test verifies that the login page is shown when you access the favourites page with being logged in  |
| Offers   | OfferTest                       | This test mocks the GPS location for Singapore and verifies that the product offers applicable for the Singapore location are shown.   |
| User     | UserTest                        | The first test verifies that existing orders are shown for user: "existing_orders_user". The second test verifies if a user can add product to the favourites. |

## Test infrastructure environments

- [On-premise/self-hosted](#on-premise-self-hosted)
- [BrowserStack](#browserstack)

## Configuring the maximum parallel test threads for this repository

  For all the parallel run configuration profiles, you can configure the maximum parallel test threads by changing the settings below.

- BrowserStack
    
    `./resources/conf/wdio-bstack-parallel.conf.js`

    ```js
    commonCapabilities: [{
    maxInstances: 5,
    ...
    ```

## Test Reporting

- [Allure reports](#generating-allure-reports)

---

# On Premise / Self Hosted

This infrastructure points to running the tests on your own machine using simulator or connected devices.

## Prerequisites

- For this infrastructure configuration (i.e on-premise), ensure that the app is downloaded and placed in the `/bin` folder.
<todo add download urls>
