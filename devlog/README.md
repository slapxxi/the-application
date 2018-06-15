# Development Log

- [ ] Create a login page with the corresponding acceptance tests
- [ ] Create a landing page
- [ ] Setup Git hooks to make sure everything complies to the standards before committing

The point of this document is to explain changes occurring in the codebase over time. The point of _devlog_ is to keep me organized and thinking about the project in terms of writing.

The rule of thumb is not to change important parts of the codebase without explaining it here.

I could see how information present here could become outdated fast. So, we need to come up with a way to make it resilient to frequent changes.

Every file describing an area of responsibility has a list of the most important tasks at the top with the first task on the list being addressed next. That allows us to clearly see what’s next on our radar and start implementing it. We could also use the issue tracker provided by Github to manage tasks but it’s platform dependent. That is, if we decide to migrate from Github or ditch it altogether the development history will not be preserved.

First, I need to come up with an idea for the application. I don’t know what it’s going to do yet but there’s a set of requirements that should be met. For instance, the application should be hosted, performant, and as close to real world as possible without spending too much time on development.

I will browse various sites in search for inspiration for the application. I will look for beautiful UIs and try to use their parts in my application. Some ideas for the project include:

- Project management app. It should be more advanced than your typical todo applications because it will allow to manage big projects with multiple people involved.

More on the features available can be found in [“Features”](features/README.md).

More on testing could be found in [“Testing”](Testing.md).
