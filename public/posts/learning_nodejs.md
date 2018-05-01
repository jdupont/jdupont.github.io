---
title: "Learning Node.js"
date: 2018-04-30
description: "I recently finished reading Marc Wandschneider’s excellent book [Learning Node.js](https://www.amazon.com/Learning-Node-js-Hands-Applications-JavaScript/dp/0321910575). Here’s what I took away."
coverImage: learning_nodejs.jpg
tags:
  - Node.js
  - Programming Books
---

I just finished reading Marc Wandschneider’s excellent book [Learning Node.js](https://www.amazon.com/Learning-Node-js-Hands-Applications-JavaScript/dp/0321910575). Here are some of my takeaways.

## Node has a new way of doing things.

Node introduces a new, asynchronous programming paradigm. 

In the pre-Node world, programs largely consisted of blocking, synchronous statements:

```
A()
B()
C()
```

There are no surprises here. The program starts with `A`, waits until `A` is done, moves to `B`, and so on.

But what happens if `A` is a slow I/O operation?

Well, not much. All of these statements are blocking, so the program has to wait until `A` returns control before moving forward. In a program with a lot of I/O operations (like most web apps), that means a lot of time is spent doing nothing.

There are some mitigating strategies here that can improve resource utilization. The processor can interleave in instructions from other threads and processes, but there is a limit to this kind of concurrency. Multi-threaded programming is confusing and often difficult, and processes come with unavoidable overhead.

Enter Node. Instead of a series of synchronous statements that block until completion, Node programs are asynchronous, non-blocking statements chained together with callbacks. In the most basic form, that looks something like this:

```javascript
A(args, B(error, args, C(error, args, ...)))
```

Here, Node starts executing`A` and places the callback to `B` on the event queue. When `A` is done, that will trigger an event that will call `B`, which adds the callback to `C` to the event queue, and so on. In between these calls, Node is free to do whatever it wants (typically interleaving in other events from the queue).

## So what’s the point?

Node’s non-blocking callback model requires a significant mental adjustment for programmers used to traditional synchronous operations (which is pretty much all programmers).

In exchange for switching mental models, you get non-blocking operations baked into your application from the start. This can have big benefits for performance and design:

 + Performance: Nonblocking I/O will give your web server a performance boost (compared to naive blocking I/O). When Node.js first came out, many servers used blocking I/O operations, spawned a child processes for each web request, and had other, similar performance bottlenecks. Compared to these servers, Node’s model could yield significantly better resource utilization and therefore better performance. Since the advent of Node, however, most modern web servers use nonblocking I/O, so performance has become a more complicated question to answer.

 + Design: Node is nonblocking by default, so you don’t have to worry about multithreading. The developer (that’s you) writes code with callbacks, and Node does the rest. There are no nasty concurrency bugs, shared memory management schemes, or any of the other usual pain points of multi-threaded programs.

Of course, nothing comes for free. Here are some of the tradeoffs of Node’s asynchronous model:

 + Performance: Yes, we’re back to performance again. Nonblocking programming may be great for I/O, but it is subpar for CPU intensive operations. Anything that requires a lot of processor usage will probably need a separate worker thread in Node so that the single-threaded main event thread doesn’t get stalled by one heavy operation.

 + Scaling: Stretching Node out over several cores can be a pain. There needs to be some kind of load splitter, typically accompanied by some kind of memory sharing (for session cookies and other persistence). Since most servers these days come with several cores, scaling Node like this is often required for full resource utilization.

## Node has a great community.

Marc Wandschneider did a great job of explaining the technical fundamentals of Node, and showing how to put those together into functioning web apps.

In the process, he repeatedly touches on another crucial point: Node has a great community.

The Node community is tied together by the `npm` package manager and repository. There are thousands of packages freely available for anyone to use, including all of the packages that went into building this blog.

The incredible community surrounding Node greatly eases the development process, and is one of Node’s big assets.
