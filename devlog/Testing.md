# Testing

- [x] Setup acceptance testing with Cypress

We want to test our application to make sure it works as expected.

For unit and integration tests we use [Jest](https://facebook.github.io/jest/) since it provides perfect React support in addition to its excellent performance and extra features such as snapshots.

For acceptance tests we use [Cypress](https://cypress.io). Cypress provides additional features for end to end testing. Cypress makes it easier to write, launch, and maintain acceptance tests than Jest does since Cypress’s designed for it. It even records videos of test runs! 

To avoid displaying ESLint errors in Cypress tests, we install an [ESLint plugin for Cypress](https://github.com/cypress-io/eslint-plugin-cypress) and configure it to include globals supported by Cypress.

The first problem with Cypress is that it displays an origin error when visiting `localhost`. It seems the reason behind that is React Router modifying `window.location.href`. To avoid this problem, we’ve set `chromeWebSecurity` to `false` in [`cypress.json`](../cypress.json).


