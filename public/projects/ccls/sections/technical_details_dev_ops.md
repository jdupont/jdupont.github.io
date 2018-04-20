---
title: "Technical Details: Dev Ops"
description: "Static analysis, source control, and more"
ordinal: 2
---

I set up the development environment and processes for this project, including source control, static analysis, and other tools.

## Source Control: Bitbucket & Mercurial

We stored the source code for this project in a Mercurial repository hosted on Bitbucket.

Mercurial and Bitbucket is a bit of a deviation from the typical Git and GitHub combo, so let me explain.

### Why Bitbucket

When we started this project, we were a bit nervous about being open-source. We weren't sure if our code was up to snuff with best practices, and we didn't know if the library system would be comfortable having all of the internals of the app visible online.

So, we needed a private repository. On GitHub, private repositories cost money. On  Bitbucket, they're free. That made Bitbucket a no-brainer for us.

### Why Mercurial

We started this project in 2012. Git support on Bitbucket [had been introduced in late 2011](https://blog.bitbucket.org/2011/10/03/bitbucket-now-rocks-git/).

Before that, Bitbucket was Mercurial only, so the Mercurial docs and tutorials available for Mercurial were much more substantial than the ones for Git. We were pretty green and we thought we could use the extra support, so we picked Mercurial.

## Static Analysis: FindBugs, PMD, & Checkstyle

Static analysis played an immeasurable role in improving code quality for our project. When Dan and I started out, we didn't have much programming experience. As newbies, we benefited enormously from static analysis's ability to catch common mistakes and enforce best practices.

I configured all three of these tools to run prior to each build in our IDE (Eclipse with Android Developer Tools). That provided quick feedback for all of the code we wrote. The tools also ran prior to each Mercurial commit, to ensure that new code contributed as little technical debt as possible.

Here's a look at the tools we ran on the project.

### FindBugs & PMD: Sniffing Out Mistakes

I chose to run both [FindBugs](http://findbugs.sourceforge.net/) and [PMD](https://pmd.github.io/) on our project. These two tools have the same goal: detecting potential defects in Java code.

However, the two have fundamentally different approaches to the same problem. PMD processes Java source code, while FindBugs scans compiled bytecode. As a result, the two tools have visibility on different kinds of defects. For example, FindBugs can identify problematic `.equals` implementations based on type and flow information available only in bytecode. On the other hand, PMD can use the source code to analyze information not available in the bytecode, like readability metrics at the source level (e.g., cyclomatic complexity).

As a aside, the FindBugs project is now defunct. It has been replaced by a "spiritual" successor, [SpotBugs](https://spotbugs.github.io/), which is what I'd run on the CCLS project today,

### Checkstyle: Enforcing a Standard

We used Checkstyle to make sure our code adhered to a coding standard. We decided to stick with the conventions from our first Java course. Some of this were industry standard for Java code (like camel case variable names) and some of which were a bit different (like our brace placement).

You can take a look at our Checkstyle configuration [here](/projects/ccls/checkstyle_config.xml).

## Defect Tracking

Once we got our app into beta with real users, we started getting quite a bit of feedback. We quickly realized we needed a consistent way to track bugs and crashes, so that we didn't let anything slip through the cracks or do duplicate work.

So, I set up defect tracking using the [issue tracker](https://confluence.atlassian.com/bitbucket/issue-trackers-221449750.html) that comes with each Bitbucket repo. We fed as much of our feedback as possible into this tracker, and then used the tracker to decide priority and ownership.

