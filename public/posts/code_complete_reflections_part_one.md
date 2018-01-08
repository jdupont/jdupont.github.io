---
title: "Code Complete 2: What I Learned"
date: 2018-01-03
description: I read *Code Complete 2* to improve my software craftsmanship. Here are my reflections on the most valuable lessons in the book.
coverImage: code_complete_2.jpg
tags:
  - Code Complete 2
  - Best Practices
  - Programming Books
---

Steve McConnell's *Code Complete 2* is a seminal book in software engineering. It topped a [StackOverflow user-submitted list of most influential programming books](https://stackoverflow.com/questions/1711/what-is-the-single-most-influential-book-every-programmer-should-read), won awards, and is widely regarded as a must-read for programmers.

With that background in mind, I decided to try to improve my software craftsmanship by reading *Code Complete 2*. Here are my reflections on the most valuable lessons in the book, and how I've been trying to apply those lessons to my own coding.

## What was most valuable

### McConnell advocates an attitude of mindful craftsmanship.

McConnell emphasizes the need for programmers to take in pride in the quality of their code. Then, he examines how small, individual decisions add up to determine a project's overall quality. Ultimately, a programmer must be consistently aware of the impact of these small decisions in order to produce first-rate code.

For me, the need for this kind of mindful craftsmanship is *Code Complete 2*'s most important point. If a programmer doesn't care about quality, or doesn't aim for it on a daily basis, the rest of the book is irrelevant anyways.

*Code Complete 2* also makes it clear that mindful craftsmanship isn't a trivial goal. There are a lot of factors that can deprioritize quality. Approaching deadlines, a belief that code won't have to be maintained, a desire to get things working as quickly as possible: the list goes on and on.

But, despite these day to day concerns, programmers must make sure that quality stays on the front burner. Even if a real-world necessity makes some technical debt unavoidable, choices that reduce code quality should be deliberate and carefully considered instead of standard operating procedure.

### McConnell provides a set of overarching goals that ensure high quality.

Programming classes, blogs, and other technical resources are good at explaining how. McConnell explains why.

For example, I recently read [this excellent tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html) about lambda expressions in Java. The tutorial focuses on filtering a collection to find elements that match a given condition. Originally, this task is achieved with a loop and a linear search, as shown in this code snippet:

```java
for (Person p : roster) {
  if (p.getAge() >= age) {
    p.printPerson();
  }
}
```

The tutorial replaces the loop with lambda expressions and streams:

```java
roster
  .stream()
  .filter(p -> p.getAge() >= age)
  .forEach(p -> p.printPerson());
```

The tutorial lists a number of practical benefits of this approach, including a reduction in repetitive boilerplate code and improved parallelization.

*Code Complete 2*, though, provides an underlying motivation by defining several broad themes of software engineering.

First and foremost among these themes is the Primary Technical Imperative for software engineering: managing complexity. In this case, lambda expressions abstract away the code for looping through a collection. Because developers don't have to deal with this step themselves, the code becomes more focused and more maintainable. Additionally, the hidden parts can be optimized more thoroughly (through improved parallelization for example).

The use of lambda expressions here also improves readability by reducing boilerplate.

Even though the tutorial lists some of these practical benefits, it doesn't provide the same overarching justification.

Some of the other themes that come up in *Code Complete 2* include finding a good programming process and writing maintainable code.

Broad themes and goals have a lot of value because they create a framework for evaluating more specific programming choices. Choices that reduce complexity, for example, are usually positive. On the other hand, choices that make code harder to read are negative. Even when there's no tutorial to point you towards best practices in a particular situation, broad themes can help guide a programmer to better software construction.

Identifying a set of overarching priorities for software engineering is one of *Code Complete 2*'s most important contributions to programming.

### McConnell describes a lot of specific ways to work towards these overarching goals.

Of course, *Code Complete 2* is a book about the nuts and bolts of writing code, so I'd be remiss not to mention McConnell's detailed construction advice. Consider these recommendations from page 308 of *Code Complete 2*:

>Use named constants in data declarations.

<!-- -->
> Avoid literals, even "safe" ones.

Using named constants instead of literals is excellent advice that will improve every program.

For me, though, the most valuable aspect of this advice isn't the advice itself. It's the fact that the advice embodies *Code Complete 2*'s larger themes. McConnell makes this clear when he ties the avoidance of literals to the larger theme of improving maintainability:

> As you might expect, the use of named constants has been shown to greatly aid program maintenance. As a general rule, any technique that centralizes control over things that might change is a good technique for reducing maintenance efforts.

Named constants also address *Code Complete 2*'s other themes, like improving readability.

Even after the specific construction advice in *Code Complete 2* has become obsolete, *Code Complete 2*'s timeless themes will help guide programmers towards better design decisions. Additionally, while *Code Complete 2* cannot possibly provide advice for all technical environments, larger themes can and do provide guidance in all situations.

So, for me, McConnell's specific advice is most valuable as a means of illustrating his broader approach to conscientious programming.

### How I Applied Those lessons

Take a look at [*Code Complete 2*: How I Applied It](/blogs?title=code_complete_reflections_part_two) to read about how I applied these lessons to my own programming.
