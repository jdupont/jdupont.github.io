---
title: React-router Version Mix-up in Meteor and React for Realtime Apps
date: 2017-12-28
description: While following along with the instructor's code in the Udemy course [Meteor and React for Realtime Apps](https://www.udemy.com/meteor-react-tutorial/learn/v4/overview), I ran into a versioning issue with react-router. Read more for a description of the problem and how to fix it.
coverImage: meteor_and_react_for_realtime_apps.jpg
tags:
  - react-router
  - Meteor
  - react
  - Online Courses
---

I’ve been taking the Udemy course [Meteor and React for Realtime Apps](https://www.udemy.com/meteor-react-tutorial/learn/v4/overview). While following along with the instructor's code, I ran into a small versioning issue with [react-router](https://github.com/ReactTraining/react-router).

## What’s the problem?

Here’s the client-side console output I got when following the instructor’s code exactly:

> Failed prop type: The prop 'history' is marked as required in 'Router', but its value is 'undefined'.
> Type Error: \_this.props.history is undefined

## What’s the cause?

The course’s code uses react-router v3. However, the course tells you to install react-router with `npm install --save react-router`.
That command automatically grabs the latest version (v4), which has a lot of [breaking changes from v3](https://github.com/ReactTraining/react-router/issues/4699#issuecomment-285891990).

## How should I fix it?

If you’ve already installed react-router v4, you’ll have to follow these instructions to uninstall it:

1. `npm uninstall --save react-router`
2. `rm -r node_modules`
3. `npm install`

Then, install react-router v3 by running `npm install --save react-router@3.x.x`.

Now everything should work as expected, and you can continue making progress on this great course!
