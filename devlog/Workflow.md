# Workflow

- [ ] Add Cypress to the precommit hook
- [x] Add a precommit hook to run Prettier, ESLint, Flow, and Jest

We use [Husky](https://github.com/typicode/husky) to manage Git hooks. Git hooks allow us to run linters, formatters and tests before committing changes to the repository. In case of any errors committing will be canceled, allowing us to make the necessary changes to the code.

We use [`lint-staged`](https://github.com/okonet/lint-staged) to run hooks only on staged files when it’s necessary.

## Testing

- [x] Setup Cypress for acceptance testing

We write tests to make sure the application and the codebase work as expected. Whether to use test driven development is an open question. Some code is better implemented with TDD in place but other code is better without it. Nevertheless, we must write tests sooner or later, preferably sooner.

### Setup

For unit and integration tests we use [Jest](https://facebook.github.io/jest/) since it provides perfect React support in addition to its excellent performance and extra features such as snapshots.

For acceptance tests we use [Cypress](https://cypress.io). Cypress provides additional features for end to end testing. Cypress makes it easier to write, launch, and maintain acceptance tests than Jest does since Cypress’s designed for it. It even records videos of test runs!

To avoid displaying ESLint errors in Cypress tests, we install an [ESLint plugin for Cypress](https://github.com/cypress-io/eslint-plugin-cypress) and configure it to include globals supported by Cypress.

The first problem with Cypress is that it displays an origin error when visiting `localhost`. It seems the reason behind that is React Router modifying `window.location.href`. To avoid this problem, we’ve set `chromeWebSecurity` to `false` in [`cypress.json`](../cypress.json). Perhaps there’s a better solution but this option should suffice for now.

### Guidelines

Write acceptance tests before implementing features.
