---
title: "Material Design: Raising a Card on Hover"
date: 2018-01-19
description: "The [Material Design specs](https://material.io/guidelines/) describe a Card component that changes appearance on hover. Here’s how I implemented that functionality by extending the Card component already available in the [material-ui library](https://material-ui-next.com/)."
coverImage: hover_card_screenshot.gif
tags:
  - Material Design
  - React
  - Building this Blog
  - material-ui
---

The [Material Design course I took](/blogs?title=material_design_for_android_developers) described a Card component that responds to mouse hover by changing in elevation. I decided to extend the Card component from the [material-ui library](https://material-ui-next.com/) to implement that functionality for this blog.

You can see the final result on [the homepage](/). Each blog post is listed on its own Card, and the cards raise up in elevation when the mouse hovers over them. Here's the card with no hover:

![Unhovered Card](/images/blog_posts/resting_card.png)

And here's the hovered state, where an increase in shadows indicates the higher elevation of the card:

![Hovered Card](/images/blog_posts/hovered_card.png)

As described by the spec, this hover only activates on desktop (sorry, mobile readers).

## Consulting the Material Design specs

I started by consulting the [Material Design specs for Cards](https://material.io/guidelines/components/cards.html). Here’s the official guideline:

> On desktop, cards can have a resting elevation of 0dp and gain an elevation of 8dp on hover.

There’s also a graphic to illustrate the desired change (the resting card is on the left and the hovered card is on the right):

![Card Elevation Diagram](/images/blog_posts/components_cards_elevation_desktop.png)

## Implementing that by building on material-ui.

Luckily, material-ui already offers a [Card component](https://material-ui-next.com/demos/cards/) with a [raised](https://material-ui-next.com/api/card/) prop that toggles elevation between the resting elevation and the raised elevation.

So, making the desired hover effect is just a matter of tracking the hover state and connecting that to the raised prop. We can start by making a `HoverCard` component that uses `onMouseOver` and `onMouseOut` to track whether the mouse is hovering on our card or not:

```JavaScript
import React, { Component } from 'react';
import Card from 'material-ui/Card';

class HoverCard extends Component {
  constructor(props) {
    super(props);

    this.onStartHover = this.onStartHover.bind(this);
    this.onEndHover = this.onEndHover.bind(this);

    this.state = { hovered: false };
  }

  onStartHover() {
    this.setState({ hovered: true });
  }

  onEndHover() {
    this.setState({ hovered: false });
  }

  render() {
    return (
      <Card
        onMouseOver={this.onStartHover}
        onMouseOut={this.onEndHover}
        onFocus={this.onStartHover}
        onBlur={this.onEndHover}
      />
    );
  }
}

export default HoverCard;
```

Note that when using `onMouseOver` and `onMouseOut`, [you should also define `onBlur` and `onFocus` for accessibility reasons](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md).

Now, it’s just a matter of hooking up `this.state.hovered` to the `raised` prop:

```JavaScript
      <Card
        raised={this.state.hovered}
        onMouseOver={this.onStartHover}
        onMouseOut={this.onEndHover}
        onFocus={this.onStartHover}
        onBlur={this.onEndHover}
      />
```

React will automatically re-render whenever the state changes, so the card will raise and lower in response to hovering as desired. It works!

## Why not use `:hover`?

At this point, you may be wondering if there’s a reason for manually tracking the hover state when there’s a convenient CSS pseudo-class (`:hover`) that already does this for us.

Unfortunately, while you can set `:hover` states using material-ui’s [CSS in JS styling solution](https://material-ui-next.com/customization/css-in-js/), you can’t leverage this to toggle props. The `raised` prop handles a lot of logic behind changing elevation, like managing shadows, adding a transition, and resolving behavior with other components. Since using `:hover` cuts us off from that, it's not an option for us.

## Slight problem: what about other `props`?

But wait, we’re not finished yet. Right now, our `HoverCard` is essentially wrapping the `Card` component, which will prevent us from setting any props directly on the `Card` component. For example, a common pattern in material-ui is to [override CSS classes to set custom styling](https://material-ui-next.com/customization/overrides/#overriding-with-classes). At this point, we can’t do that with `HoverCard`, because we can’t access the `Card` component.

The solution is to spread any `prop`s that are passed in to the `Card`, so that any users of our `HoverCard` have access to the full functionality of the `Card` component:

```JavaScript
      <Card
        raised={this.state.hovered}
        onMouseOver={this.onStartHover}
        onMouseOut={this.onEndHover}
        onFocus={this.onStartHover}
        onBlur={this.onEndHover}
       {...props}
      />
```

Now we run into another problem - if the user sets a `prop` for any of the events we’re currently using (like `onMouseOver`), it will be spread into the `Card`. That means we’ll effectively be setting duplicate props, and one of them will get ignored. So, we need to collect those four events, and make sure to combine them into our logic so that we avoid duplication.

```JavaScript
const {
      onMouseOver, onMouseOut, onFocus, onBlur, ...other
    } = this.props;

    return (
      <Card
        onMouseOver={() => {
          if (onMouseOver) {
            onMouseOver();
          }

           this.onStartHover();
        }}
        onMouseOut={() => {
          if (onMouseOut) {
            onMouseOut();
          }

           this.onEndHover();
        }}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }

           this.onStartHover();
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }

           this.onEndHover();
        }}
        raised={this.state.mousedOver}
        {...other}
      />
    );
```

Now all of our bases our covered. Because we’re using `...other`, we preserve the ability to pass through arbitrary props. Then we handle the events as a special case to make sure users can also use those if needed.

## The final code.

Here’s everything put together into a fully working `HoverCard` component:

```JavaScript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';

class HoverCard extends Component {
  constructor(props) {
    super(props);

    this.onStartHover = this.onStartHover.bind(this);
    this.onEndHover = this.onEndHover.bind(this);

    this.state = { mousedOver: false };
  }

  onStartHover() {
    this.setState({ mousedOver: true });
  }

  onEndHover() {
    this.setState({ mousedOver: false });
  }

  render() {
    const {
      onMouseOver, onMouseOut, onFocus, onBlur, ...other
    } = this.props;

    return (
      <Card
        onMouseOver={() => {
          if (onMouseOver) {
            onMouseOver();
          }

           this.onStartHover();
        }}
        onMouseOut={() => {
          if (onMouseOut) {
            onMouseOut();
          }

           this.onEndHover();
        }}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }

           this.onStartHover();
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }

           this.onEndHover();
        }}
        raised={this.state.mousedOver}
        {...other}
      />
    );
  }
}

HoverCard.defaultProps = {
  onMouseOver: null,
  onMouseOut: null,
  onFocus: null,
  onBlur: null,
};

HoverCard.propTypes = {
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default HoverCard;
```

You can also see the [full code on my Github](https://github.com/jdupont/jdupont.github.io/blob/Production/src/widgets/hover_card.js).
