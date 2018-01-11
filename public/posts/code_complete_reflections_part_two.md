---
title: "Code Complete 2: How I Applied It"
date: 2018-01-04
description: Here's how I applied the valuable lessons from *Code Complete 2* to my own programming projects.
coverImage: code_complete_2.jpg
tags:
  - Code Complete 2
  - Best Practices
  - Programming Books
---

Welcome back for my second post on *Code Complete 2*. In my [first post](/blogs?title=code_complete_reflections_part_one), I discussed the most valuable lessons in the book. Here's how I've been trying to integrate those lessons into my own programming projects.

## I've been more aware of the quality of my craftsmanship.

*Code Complete 2*, really drove home the need to be consistently mindful of how small construction decisions can have big repercussions for program quality down the road.

I've been trying to maintain this kind of mindfulness throughout all of my programming. For example, I've paid a lot more attention to picking names.

I already knew that good names were important. But, McConnell really reinforced the idea that descriptive names were crucial to readable code. He also gave me some much clearer metrics for judging whether a name was "good" or not. Now, I pay much closer attention to the names I pick, and I make a habit of going back and reviewing names before submitting commits.

I've also been refactoring older code when I encounter names that aren't up to par. For example, I'd previously connected a JavaScript method to a button in a webpage I'm building. In these circumstances, I thought `onClick()` was a perfectly appropriate name.

But, that doesn't live up to *Code Complete 2*'s metrics. Here's what McConnell says about method names:

> A good name for a routine clearly describes everything the routine does.

`onClick()` fails that metric. It describes when the method should be executed, not what it does. If I add another button to the page, or if I decide that the method should be executed based on a browser event, the name becomes actively misleading.

So, after consideration, I renamed the method `persistPendingChanges()`, which better describes the action of saving the user's changes.

## I've improved my programming process.

Throughout *Code Complete 2*, McConnell stresses the importance of having a good process.

Having a good process allows you to minimize the defect rate in new code. If you happen to introduce a code defect, it also allows you to find and correct the problem as quickly as possible. That is a big plus because problems that are found early are much less expensive to fix. Other benefits of finding a good process include stabilized requirements, smoother teamwork, and higher returns from each hour spent coding. As McConnell says:

> A bad process wastes your brain cycles. A good process leverages them to maximum advantage.

So, I decided to examine my programming process and identify areas for potential improvement. I found that one of the clearest shortcomings was the absence of consistent static analysis.

I knew about static analysis before reading *Code Complete 2*, and had used it on some previous projects.

However, I did not always use static analysis consistently. Even when I did run it, I didn't always use it to its full potential. I suppressed some warnings, did not apply a broad set of rules, and took other shortcuts that reduced the value of static analysis as a whole.

So, I resolved to apply static analysis to all of my projects across the board (even smaller personal projects). I also decided to use the results more mindfully.

So far, I'm pleased with the outcome. My side projects right now are in Java, so I chose these three tools:

- [Checkstyle](http://checkstyle.sourceforge.net/), which ensures a consistent coding convention
- [PMD](https://pmd.github.io/), a source-code level analyzer that catches certain kinds of bugs
- [SpotBugs](https://spotbugs.github.io/), a byte-code level analyzer that catches other kinds of bugs

Each of these integrates into my IDE, Eclipse, with a convenient plugin that runs in real time and displays warnings inline. This ensures that warnings are prominent and that feedback from the static analysis tool is received as quickly as possible.

Right after setting these tools up, I was submerged in the flood of warnings that inevitably follows the first ever run of static analysis on a codebase.

In keeping with the spirit of making the best possible use of static analysis, I fixed all of the initial warnings upfront. That's led to much more readable code. Consider the following code snippet, which contains `if` statements that could be nested.

```java
if (!this.isFinished()) {
  if (this.shouldAdvanceToNextInterval()) {
    this.currentTimer.startTimer();
   }
}

```

The irrelevant `if` had been introduced when I deleted the `else` clause and forgot to consolidate the `if` conditions. Now I have the following, more readable code:

```java
if (!this.isFinished()&& this.shouldAdvanceToNextInterval()) {
    this.currentTimer.startTimer();
   }
}

```

On top of that, the static analysis tools caught some potential defects lurking in my codebase. PMD, for example, noticed that I was indirectly calling an overridable method in a constructor. While that wasn't causing any issues yet, the interactions between overridable methods and constructors in child objects can cause subtle bugs and a whole lot of pain.

For me, this particular fix is a great illustration of the value added by static analysis code. The overridable call was hidden inside a call to another, `final` method, so it's highly unlikely I would have caught it without static analysis.

## Some last thoughts

*Code Complete 2* has helped me make practical improvements in my coding ability. More importantly, it's given me a better attitude for approaching programming in general.

I'm glad I read this book, and I'd recommend it to all beginning and intermediate programmers.
