---
title: "Building this Blog Platform: Technical Choices"
date: 2018-01-31
description: I've recently been learning about React and other technologies for building web apps, and building my own blog was a great opportunity to practice those new skills. Read more for an explanation of why I decided to code this blog, and what I hoped to learn in the process.
coverImage: technical_choices_logos.png
tags:
  - Building this Blog
  - React
  - material-ui
---

I built this blog platform myself!

But wait - given all of the great blogging software already available for free, why would I chose to reinvent the wheel?

## Building this blog platform was a learning opportunity.

I’ve been learning about a number of different technologies related to web apps, like [React](https://reactjs.org/), and I wanted a chance to practice those technologies in a useful side project.

At the same time, John Sonmez's [writing on the importance of having a blog](https://simpleprogrammer.com/2017/07/03/blogging-software-developers/) really won me over, which made starting a blog a priority on my to-do list.

I decided to combine those two goals by building this blog platform myself. That gave me the opportunity to practice my web development skills while building a useful project to add to my portfolio.

The specific development skills I wanted to practice were:

- *React*: I learned about React in an [Udemy course](/blogs?title=react_and_meteor_for_realtime_apps), and I wanted the chance to practice with it in a personal project.
- *Material Design*: I learned about Material Design in an [Udacity Course](/blogs?title=material_design_for_android_developers). I’d already applied that course to an Android app with positive results, so I wanted to try applying Material Design in a different environment as well.

The next section explains how I selected a technical design to compliment these learning goals.

## My Technical Choices: An Overview

In addition to practicing React and Material Design, I also had a couple other requirements:

- Everything should be free and open-source.
- Posts should be written in Markdown and stored in a `/posts/` folder somewhere in the app (as opposed to being hardcoded inside a React component or HTML).
- There should be as little hassle as possible with configuration or build processes.

With those restrictions in mind, I decided to use [Github Pages](https://pages.github.com/) to host my web app. It’s free, works well, and has an easy-to-use deployment system built on top of Git.

One of the major consequences of Github Pages is that there is no server, so any web apps have to be static (entirely client-side).

That static requirement cemented an overall design for my blog platform: a static, single-page application built with React.

## My Technical Choices: React & Create React App

Beefing up my React skills was one of my main goals for this project, so of course I made the front-end entirely in React.

I used [Create React App](https://github.com/facebook/create-react-app) to set everything up. This tool makes building a static site a breeze, which hit the nail on the head for my goal of a hassle-free set up.

## My Technical Choices: material-ui

I also wanted to design this site according to the principles of Material Design. That meant I needed a React library that provided Material Design components with appropriate styling. I considered a number of choices, like [material-ui](https://github.com/mui-org/material-ui), [react-mdc-web](https://github.com/kradio3/react-mdc-web), and [material-components-web](https://github.com/material-components/material-components-web).

I settled on material-ui for a number of reasons:

- *It’s very active*. There are commits almost every day, which means constant updates and bug fixes.
- *It’s very popular*. Material-ui has more than 30,000 stars on Github, and an active StackOverflow [tag](https://stackoverflow.com/questions/tagged/material-ui). That means a lot of community support and examples if I happen to get stuck somewhere. As an aside, I’m an [active participant](https://stackoverflow.com/search?q=user:8762152+[material-ui]) in the material-ui StackOverflow community.
- *The docs are excellent*. Yup, that’s pretty important.

The other libraries I considered didn’t measure up across all of these metrics. In retrospect, I’m very happy with my choice of material-ui. It works well, looks good, and provides a consistent implementation of the Material Design spec.

## My Technical Choices: Development Environment

Finally, I needed to set up a development environment.

Since I’m using GitHub Pages, Git was a given for source control. I have a development and production branch set up, and then deploy updates using the [gh-pages](https://github.com/tschaub/gh-pages) task.

Then, I use the [Atom IDE](https://ide.atom.io/). I also thought it was important to run static analysis on my project, so I set up [eslint](https://eslint.org/) set up with the [Airbnb ruleset](https://github.com/airbnb/javascript).

## My Technical Choices: Wrap up

I set up this project with libraries and tools that will help me learn and expand my development skill set. After selectecting all of the appropriate technologies, I drew up a design. Read more about that in the next installment.
