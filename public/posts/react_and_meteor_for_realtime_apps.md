---
title: Meteor and React for Realtime Apps
date: 2018-01-09
description: I just finished taking the Udemy course [Meteor and React for Realtime Apps](https://www.udemy.com/meteor-react-tutorial/learn/v4/overview) to beef up my web development skills. Here's what I learned and how I applied it.
coverImage: meteor_and_react_for_realtime_apps.jpg
tags:
  - Meteor
  - react
  - Online Courses
---

I just finished the Udemy course [Meteor and React for Realtime Apps](https://www.udemy.com/meteor-react-tutorial/learn/v4/overview), and it was awesome. Here’s what I liked best:

## The course was great.

The course bills itself as a comprehensive overview of Meteor and React fundamentals. It definitely lives up to that promise. The instructor touches on everything that’s needed for getting started, and lays a solid foundation for moving forward with writing actual apps.
One of the best parts of the course was a focus on writing code. The course is built around a series of projects, each of which illustrates some key concepts in Meteor or React. This is really helpful because writing code is one of the best ways to learn about programming.
The coding projects have the added benefit of being cool, useful applications. The final project, for example, is a live Markdown editor that leverages Meteor to automatically save changes to the server and propagate these changes between users. While this kind of application has definitely been done before, it was still cool to create useful, production quality features in a classroom project. Here’s a screenshot of the end product:
![Screenshot of Markdown editor](/images/blog_posts/markbin_editor_screenshot.png)

## Meteor and React are really cool.

The reason I got into software was to build cool things. The combination of Meteor and React makes that really easy.
Meteor provides a lot of the back-end functionality that is difficult or tedious for developers to implement on their own. For example, user authentication is provided right out of the box. This feature normally requires special care because of the risk of inadvertently introducing vulnerabilities, but in Meteor it’s simply a question of hooking up some front-end views to the [useraccounts package](https://guide.meteor.com/accounts.html#useraccounts).
Then, React adds a great way to organize front-end views and create maintainable, performant code. While that was also possible in other web development technologies I’d previously used (like [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle))), it’s much easier in React. That’s because modularity is baked into React through the idea of components, which encourages organized, reusable code.
If the benefits of these two tools weren’t enough, there’s also a flourishing ecosystem of open-source tools and libraries that can make quality and productivity skyrocket. There are [static analysis tools](https://eslint.org/), [styling and component libraries](https://react-bootstrap.github.io/), [visualization libraries](https://github.com/uber/react-vis), and many more useful projects besides.
When used together, Meteor, React, and their accompanying open-source projects make it possible to build production-quality web apps quickly and easily.

## Where I’m going from here.

This course covered the fundamentals, so there’s a lot more to learn. Here are some of the steps I’m taking to make more progress.

### Running [ESLint](https://eslint.org/).

In the side projects where I’ve been using Meteor and React, I’ve also made sure to run [ESLint](https://eslint.org/) with [the React specific linting rules](https://github.com/yannickcr/eslint-plugin-react). This linter has proven to be a great learning tool by teaching me about a lot of the best practices I should be using in React and ES6.
For example, the linter introduced me to the use of `PropTypes`. Now, I use them consistently, which helps specify component interfaces, ensures components receive all necessary information and adds type checking, among other benefits.

### Using and learning from other libraries.

I’ve also been using and learning from other people’s code. One of the great things about the Meteor and React ecosystem is the abundance of open source projects, like [material-ui](https://material-ui-next.com/) and [React-Bootstrap](https://react-bootstrap.github.io/). In addition to being invaluable building blocks, these open source projects also give examples of how to design and implement your own web apps and web app components.
For example, I used [react-router](https://reacttraining.com/react-router/) to provide the routing on this blog. The library has introduced me to several useful React design patterns, like [higher order components](https://reactjs.org/docs/higher-order-components.html). react-router uses this construct to [inject access to values such as history and current location](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md), and I’ve found it useful for improving code reuse.

### Making more cool things!

Like this blog, which I wrote using React and the excellent [material-ui library](https://material-ui-next.com/). There are a lot of great blog engines already available. But, writing a programming blog and improving my web development skills seemed like complimentary goals, so I decided to code my own platform as a learning project. Keep your eyes peeled for a post talking about my experiences designing and implementing this blog.
I’ve also been playing around with Meteor and React for some other side projects. Once I’ve written some more code and seen which of my skill areas need the most improvement, I might also take another course to beef up my technical knowledge.
