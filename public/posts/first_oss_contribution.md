---
title: "My First Open-Source Contribution"
date: 2018-02-22
description: Last week, I made my first contribution to an open-source project, and I’m pretty excited about it. Read more for details of my contribution and the pull request process.
coverImage: first_pull_request.png
tags:
  - Open Source Software
  - React
  - material-ui
---

Last week, the owner of [material-ui](https://material-ui-next.com/) accepted my first ever pull request to an open-source project. Here are the details of what I contributed and how the contribution process worked.

## What did I submit?

I had always wanted to contribute to an open-source project, but I was a bit intimidated by the whole process. I’d never forked a project or made a pull request, and I didn’t want to do anything wrong on my first go.

So, I wanted get my feet wet without diving in headfirst. [This issue](https://github.com/mui-org/material-ui/pull/10301) seemed like the perfect candidate. It was a small, self-contained documentation issue caused by the doc pages getting out of sync with  API changes in the beta. The fix was a simple, one-line removal of links so that internal components didn’t end up on the public API pages:

```
-components: MobileStepper, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper
+components: MobileStepper, Step, StepButton, StepContent, StepIcon, StepLabel, Stepper
```

## How did I submit it?

The submission was the part I was most interested in. Since I’d never contributed to an OSS project before, I was worried about not getting the mechanics quite right.

Luckily, the material-ui [contributor page](https://github.com/mui-org/material-ui/blob/v1-beta/CONTRIBUTING.md) had a set of very clear instructions. I started by [forking material-ui](https://github.com/jdupont/material-ui). Then, I built the documentation website to make sure I could get everything working locally. 

After I made the needed doc changes, I checked that the doc website was correct, ran lint, and then pushed my changes upstream and submitted a pull request.

## The result:

The [material-ui owner](https://github.com/oliviertassinari) accepted my pull request almost instantly. It was [merged in](https://github.com/mui-org/material-ui/pull/10301), and then I was added to the [contributor list](https://github.com/mui-org/material-ui/releases/tag/v1.0.0-beta.34) for that week’s sprint.

## Next steps.

The contribution I made was relatively small, and didn’t include any tough technical challenges. But, I learned about the forking and submission process, and got to try it out on a real project.

Now that I’m more confident about contributing, I’ll tackle a more significant issue for my next pull request.

