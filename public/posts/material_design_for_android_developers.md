---
title: "Material Design for Android Developers"
date: 2018-01-14
description: "I just finished taking the Udacity course [Material Design for Android Developers](https://www.udacity.com/course/material-design-for-android-developers--ud862), which discussed [Material Design](https://material.io/) and how to provide a consistent and powerful user experience across many platforms (not just Android). Read more to see what I learned and how I’ve applied it."
coverImage: material_design_for_android_developers.jpg
tags:
  - Material Design
  - Online Courses
  - Android
---

I started taking the Udacity course [Material Design for Android Developers](https://www.udacity.com/course/material-design-for-android-developers--ud862) to improve my Android app design.

I ended up learning a whole lot more than just how to style Android apps. This isn’t a class about Material Design specifically for Android; it’s a class about the theory and practice of [Material Design](https://material.io/), with implementation examples provided in Android.

As such, the course discussed the core principles of Material Design, like using meaningful motion and incorporating the feel of physical materials. It also covered user interaction patterns and components that are common in Material Design.

The focus on Material Design added a lot of value to this course. I still learned how to improve my Android apps, but I also learned a universal design language that can provide a consistent UI and UX across all kinds of apps.

## The Power of a Universal Design

Consider [this case study](https://www.nngroup.com/articles/why-doc-searls-doesnt-sell-any-books/) about book sales (much appreciation to [Joel on Software](https://www.joelonsoftware.com/) for linking to this excellent article). The case study focuses on a blogger who switched his book and merchandise sales from Amazon to Wordsworth (yes, this case study is old). Here’s what happened:

> He used to sell many books from his site when he linked to Amazon to do the fulfillment.

<!--- --->

> He has not sold a single book since he changed his site and started to link to an independent bookseller, Wordsworth, to handle fulfillment.

Why?

Even in 2000, when this article was written, far more people were familiar with Amazon than Wordsworth. That means that there was already a large population of users who knew how to use Amazon, with no comparable population for Wordsworth. That means fewer users knew how to use Wordsworth right out of the box.

Wordsworth made this hurdle higher with usability patterns that didn’t follow accepted ecommerce standards. For example:

> There is no obvious checkout button - the word "checkout" does appear but as non-standard white text that does not look like a hypertext link.

Because users didn’t immediately understand how to use Wordsworth, they left without buying anything. That behavior has been observed many times: if users can’t get anything out of an app in the first few seconds, they leave and never return.

That’s what’s great about Material Design. No matter the app or platform, it operates in a consistent way. That means a much lower learning curve and therefore much more usability for new users.

## Common Patterns

The Udacity course encourages a consistent and intuitive user experience by discussing a number of common user flows. No matter the subject area, apps often have universal user interaction problems to solve (e.g., [searching within an app](https://material.io/guidelines/patterns/search.html) or offering [help and feedback](https://material.io/guidelines/patterns/help-feedback.html#)). So, Material Design provides a set of common patterns that can help solve these problems in a consistent way.

For example, navigating between parts of an app is a common problem no matter the platform. Websites must provide some way for users to move from page to page, and Android apps must similarly allow users to transition from activity to activity.

Since the core problem of internal navigation is shared, Material Design offers a shared solution: the [Navigation Drawer](https://material.io/guidelines/patterns/navigation-drawer.html). These drawers are a staple of Material Design apps, so they’re immediately intuitive to users.

The course also discussed smaller details that help create a consistent visual experience across Material Design apps. For example, [buttons](https://material.io/guidelines/components/buttons.html) should have common styling that’s indicative of the importance of the button action. Flat buttons are frequent and less important, raised buttons are less frequent and more important, and floating action buttons are rare and crucial:

![Button Importance Diagram](https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7RHFUU2dFdmMtcm8/components-buttons-usage-main.png)

This universal visual language helps communicate information to users and provides cues about how to interact with any app.

## Responsive Design

The course also stressed the need for designs to adapt to a wide variety of screen sizes. The course provided a number of techniques for accomplishing that, including repositioning content, using appropriate images, and employing design patterns that scale well across devices. Material Design helps with that by stressing user interactions that naturally respond well to changes in screen size and device type.

Drawers, for example, scale well on all devices from mobile to tablet to desktop. On mobile, the navigation drawer collapses so that the user has maximum screen space. Then, on tablets and desktops, the navigation drawer can be fixed for easier access, or maintain the same collapsing behavior to emphasize content.

## How I’m Applying These Lessons

You’re looking at one of the applications of this course. I built this blog platform myself to practice using the principles of Material Design.

Going forward, I’d like to use Material Design on both Android and iOS so that I can get some more multi-platform experience. I’d also like to experiment with approaches other than Material Design, so that I can compare and see what I like best.
