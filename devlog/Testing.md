# Testing

- [ ] Setup end to end testing with Puppeteer

We want to test our application to make sure it works as expected.

We use [Jest](https://facebook.github.io/jest/) as a testing framework of choice because it’s designed to work effectively with React codebases and it’s one of the best testing frameworks available in general.

To test features of the application from users’ perspective we use [Puppeteer](https://pptr.dev). We don’t use [Cypress](https://www.cypress.io) because of the rigid structure it imposes on testing framework. That is, we can’t use Jest matchers to test the behavior of the application. We’d like to use a single testing framework instead of a bunch of various tools with different APIs. Puppeteer provides a set of its onw APIs of course but it doesn’t depend on any testing framework, which makes it a good choice for us.

After some time we identified that our test suite is slow and requires change. It was mostly due to the sheer number of tests in the codebase.
