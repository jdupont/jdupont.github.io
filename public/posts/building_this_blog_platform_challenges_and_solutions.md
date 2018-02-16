---
title: "Building this Blog Platform: Challenges and Tradeoffs"
date: 2018-02-13
description: I previously wrote about [my rationale for building this blog platform](/blogs?title=building_this_blog_platform_technical_choices). In this post, I discuss my design choices and the decisions I made during the construction process.
coverImage: spa_code_screenshot.png
tags:
  - Building this Blog
  - React
  - react-router
---

In my last post, I talked about why I decided to code this blog platform myself, and what I hoped to learn in the process. Those learning goals included a list of technologies and approaches I wanted to practice. Here are two significant challenges I encountered while combining those approaches into a final product, and the solutions and tradeoffs I made to resolve them.

## Blog Design: An Overview

In a nutshell, this blog is a static single-page application hosted on GitHub Pages. The UI is drawn up according to the principles of Material Design and implemented in React with the help of the material-ui library.

That design translated into a couple key design challenges:

- *Routing*: GitHub Pages doesn’t offer any route handling, so implementing some kind of routing was one of the first challenges I faced.
- *Loading blog posts*: I wanted to store posts in Markdown format in a `/posts/` folder and load them into my web app as appropriate. Making this a reality was another significant challenge.

## Routing on Github Pages

GitHub Pages serves static files from a Git repo. The directory structure of that repo dictates the URL of each page, so a file located at `/public/myfiles/page.html` in the repo will be served as `${base_url}/public/myfiles/page.html`. Because of this set up, there’s no route handling. Either there’s a file at the requested location, or the user gets a 404.

But, that wasn’t going to cut it for my single-page React app. At the very least, I needed support for custom routes with query parameters (like the `blog?title=` URL you can see for these blog pages).

Luckily, [Rafael Pedicini](https://github.com/rafrex) put together a solution that leverages GitHub Pages’s 404 behavior to simulate true route handling. When GitHub Pages encounters a route with no matching file in the repository (like the aforementioned `blog?title=`), it redirects to a 404 page with access to the unrecognized url. There’s also the option of creating a custom 404 page.

By using a script on the custom 404 page to parse the unrecognized URL, you can create a semblance of of routing. There’s more information and a script that does so [here](https://github.com/rafrex/spa-github-pages).

I paired that script with [react-router v4](https://github.com/ReactTraining/react-router) to put together routing throughout my app.

## Consequences of This Routing Solution

This routing solution works. As you can see throughout this site, there’s a variety of URLs with no matching repository file, and navigating between these works fine.

But, there are some definite problems. These aren’t unique to this routing implementation. Instead, they’re typical drawbacks of single-page applications.

Single-page applications, by definition, are backed by exactly one HTML file. So, for every URL you might visit on my site, the page load will look something like this:

1. Load the single HTML page (usually `index.html`) with a 200 status code. This load includes `<head>` tags like the `<meta>` and `<title>` tags. You can see the HTML page I load [here](https://github.com/jdupont/jdupont.github.io/blob/master/index.html).
2. Execute the JavaScript that injects the appropriate content. For me, that’s [this piece of code](https://github.com/jdupont/jdupont.github.io/blob/Production/src/index.js), which loads my base React component into the root of the `index.html` page.
3. The JavaScript will typically execute any other needed functionality, such as interpreting a URL and routing to the appropriate content.

Notice that the first step is always to load `index.html` with a status code of 200. So, no matter what URL you visit, the very first thing you see is a 200 response with the few tags present in the `index.html`. 

Here’s some places where that came back to bite me:

- *Soft 404*: If you navigate to a URL that’s not present on my site, like [https://jdupont.github.io/i_do_not_exist](/i_do_not_exist), you’ll see a message saying that the requested page couldn’t be found. But, that message isn’t paired with a 404 response code. Since all routing is done in JavaScript, and the JavaScript is only executed after `index.html` is loaded with a 200 response code, all possible URLs initially load as valid pages. 
- *[Open Graph Protocol](http://ogp.me/)*: A lot of websites use OGP tags to provide information about a website’s content. For example, LinkedIn uses OGP to populate descriptions and cover images for links in user resumes. Unfortunately, since these tags are usually scraped on the initial page load, only tags that are present in `index.html` will be taken into account. Instead of having specific OGP information for each page (such as a customized title and image), a single-page app will be forced to have the same OGP tags attached to very different pieces of content.
- *Google Analytics*: Setting up Google Analytics on a traditional website is easy; you stick in a provided JavaScript tracking snippet, it gets executed with every page load, and it sends the information about those loads to the Google Analytics engine. But, in single-page applications, there is only one page load. If you want to track user behavior across different pieces of content inside your single-page app (which you probably do), you need to [manually implement your own tracking solution](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications).

Encountering these limitations in my app proved to be a great learning experience about some of the practical drawbacks of single-page apps.

## Loading Blog Posts

As I discussed in my previous post, I wanted to save posts in Markdown format in a `/posts/` folder and dynamically extract them into my web app. That makes it a lot easier to publish new content. Ideally, the entire process would be independent of the build system, so that publishing new content didn’t require a rebuild.

The solution I came up with leveraged Webpack’s [dynamic require](https://dev.to/kayis/dynamic-imports-with-webpack-2) to extract all Markdown files from the `/posts/` folder. By convention, each post is stored in Markdown format in a designated folder. In addition to Markdown content, each post also contains YAML front matter containing metadata such as a title, a brief description, and the author (that’s me!).

I use the [front-matter-loader](https://github.com/elliottsj/front-matter-loader). It parses the front matter into a JSON object, and loads the Markdown body as plain text. From there, I render the Markdown using [marked](https://github.com/chjj/marked) with [highlight.js](https://highlightjs.org/). Then, I display it and the appropriate metadata in a React component.

This solution works well, but does fail to meet one of my goals. Webpack’s dynamic import happens at build time, so adding blog posts requires a rebuild. I accepted this limitation because the Webpack approach has one significant advantage over competing solutions. Since blogs are packaged by the build, the web app shows content after the very first HTTP request is completed. Alternative solutions all required several requests to load blogs posts, which diminishes the responsiveness of the app.

Of course, this will not scale (since builds will become larger and larger as I add more content). Implementing a better (but still responsive) solution is one of the pieces of future work for this blog platform.

## Conclusion

The two biggest technical problems I ran into were routing and loading posts. I found solutions for both, but both solutions have some limitations. That’s not unexpected - if there was a perfect, easy solution, then this wouldn’t be software engineering.

So, I’m happy with the result, but I’m aware that some things will need to change. The next post in the installment will discuss what I learned and where I plan on going next.
