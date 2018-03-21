---
title: "Design Patterns: What I Learned"
date: 2018-03-21
description: "I just finished taking a [class about design patterns](https://www.lynda.com/Developer-Programming-Foundations-tutorials/Foundations-Programming-Design-Patterns/135365-2.html) offered by the authors of [Head First Design Patterns](http://shop.oreilly.com/product/9780596007126.do). Here’s what I learned and how I’m going to apply it."
coverImage: pattern.png
tags:
  - Design Patterns
  - Best Practices
  - Online Courses
---

I just took a [design patterns class](https://www.lynda.com/Developer-Programming-Foundations-tutorials/Foundations-Programming-Design-Patterns/135365-2.html) taught by the authors of [Head First Design Patterns](http://shop.oreilly.com/product/9780596007126.do). Here are my thoughts after finishing up the class.

## I wish I’d taken this class earlier.

I could have saved myself a lot of pain. 

There are a lot of past coding situations where I remember struggling with a design problem, coming up with a solution, and then revisiting it over and over as my requirements changed. A lot of those situations were covered by the seven design patterns covered in this course, which means I was needlessly reinventing the wheel.

For example, I once made a workout timer app for Android. I modeled the timer as a state machine with a few states: paused, running, and stopped. Then, I made transitions based on the user actions: hitting pause, hitting play, cancelling the workout, etc.

I implemented that state machine by making a `TimerState` enum representing the current state, and then transitioning between states whenever a user clicks a button. That implementation worked fine until I started needing to add states and transitions. I realized that I wanted to save workout state, for example, so that users had the option to stop and resume workouts at a later date. Adding states and transitions meant returning to my existing code, adding states to `TimerState`, and then revisiting masses of `if` and `switch` statements to figure out where to place new transitions.

I could have avoided all this pain with the [state pattern](https://en.wikipedia.org/wiki/State_pattern). Using this pattern would have made my code more flexible and easier to extend. It would have also made my code a lot more readable, both to myself and any other developers familiar with this pattern.

## Patterns & Situations.

This course covered seven design patterns and the essentials of their implementations, so I have some tools available to reduce any future pain. My plan is to remember the types of situations where each design pattern might be applicable, and then work on recognizing those situations in my own code:

| Pattern | Situation |
| ---- | ---- |
| State    | You need to implement a state machine. |  
| Observer | You need to notify one or more objects of events or data changes, but you don’t want any kind of tight coupling between the publisher and subscribers. |  
| Decorator | You need to add an arbitrary number of attributes and behavior to any object without changing that object. |  
| Singleton   | You need one and only one. |  
| Factory | You need to abstract away the specifics of object creation, especially the exact type of the created objects.  |  
| Strategy   | You need to have an interchangeable family of algorithms. Especially applicable when you need to select algorithms at runtime. |  
| Iterator  | You need to iterate over collections (who would have guessed?). | 

## Design patterns are ubiquitous.

I may not have known their names, but I was already familiar with a number of the design patterns from this class. 

I was very familiar with the Observer pattern from various GUI libraries where listeners can subscribe to notifications about user actions, such as button clicks. I’d also seen the Singleton pattern in action with logging frameworks,  and the Factory pattern in libraries such as Jsoup and Gson, where a parser is built by a factory.

The fact that I was already familiar with these patterns shows how universal they really are. No matter what kind of programming you’re doing, design patterns probably play a key role.

## My next steps.

This course was great. I learned a lot about making my code cleaner, and I gained a powerful vocabulary for communicating about design with my fellow developers.

But, there's more to do if I want to get the most out of this course.

First, I need to make sure I use design patterns in my everyday coding. If I don’t practice these design patterns in the real world, then my theoretical knowledge won’t help me much. That includes taking the time to recognize design patterns in other people’s code,  and thinking about why these developers chose certain patterns in certain places.

Second, I need to take more classes. This course covered 7 patterns. Seeing as the seminal Gang of Four book included 23 total, I still have a lot to learn.
