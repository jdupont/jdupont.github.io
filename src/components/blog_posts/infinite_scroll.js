import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class InfiniteScroll extends React.Component {
  static mousewheelListener(e) {
    // Prevents Chrome hangups
    // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
    if (e.deltaY === 1) {
      e.preventDefault();
    }
  }

  constructor(props) {
    super(props);
    this.scrollListener = this.scrollListener.bind(this);
  }

  componentDidMount() {
    const { pageStart } = this.props;

    this.pageLoaded = pageStart;
    this.attachScrollListener();
  }

  componentDidUpdate() {
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.detachScrollListener();
    this.detachMousewheelListener();
  }

  // Set a defaut loadingIndicatorComponent for all your `InfiniteScroll` components
  setDefaultLoader(loadingIndicatorComponent) {
    this.defaultLoader = loadingIndicatorComponent;
  }

  detachMousewheelListener() {
    const { useWindow, useCapture } = this.props;

    const scrollEl = useWindow === false ? this.scrollComponent.parentNode : window;

    scrollEl.removeEventListener('mousewheel', InfiniteScroll.mousewheelListener, useCapture);
  }

  detachScrollListener() {
    let scrollEl = window;
    if (this.props.useWindow === false) {
      scrollEl = this.scrollComponent.parentNode;
    }

    scrollEl.removeEventListener(
      'scroll',
      this.scrollListener,
      this.props.useCapture,
    );
    scrollEl.removeEventListener(
      'resize',
      this.scrollListener,
      this.props.useCapture,
    );
  }

  attachScrollListener() {
    const {
      hasMore,
      useWindow,
      useCapture,
      initialLoad,
    } = this.props;

    if (!hasMore) {
      return;
    }

    let scrollEl = window;
    if (useWindow === false) {
      scrollEl = this.scrollComponent.parentNode;
    }

    scrollEl.addEventListener('mousewheel', InfiniteScroll.mousewheelListener, useCapture);
    scrollEl.addEventListener('scroll', this.scrollListener, useCapture);
    scrollEl.addEventListener('resize', this.scrollListener, useCapture);

    if (initialLoad) {
      this.scrollListener();
    }
  }

  scrollListener() {
    let el = this.scrollComponent;
    const scrollEl = window;

    if (!el.offsetHeight) {
      // eslint-disable-next-line react/no-find-dom-node
      el = ReactDOM.findDOMNode(el);
    }

    let offset;
    if (this.props.useWindow) {
      const doc = document.documentElement || document.body.parentNode || document.body;
      const scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;
      if (this.props.isReverse) {
        offset = scrollTop;
      } else {
        offset = this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
      }
    } else if (this.props.isReverse) {
      offset = el.parentNode.scrollTop;
    } else {
      offset =
        el.scrollHeight - el.parentNode.scrollTop - el.parentNode.clientHeight;
    }

    if (offset < Number(this.props.threshold)) {
      this.detachScrollListener();
      // Call loadMore after detachScrollListener to allow for non-async loadMore functions
      if (typeof this.props.loadMore === 'function') {
        this.props.loadMore((this.pageLoaded += 1));
      }
    }
  }

  calculateTopPosition(el) {
    if (!el) {
      return 0;
    }
    return el.offsetTop + this.calculateTopPosition(el.offsetParent);
  }

  render() {
    const {
      children,
      element,
      hasMore,
      initialLoad,
      isReverse,
      loadingIndicatorComponent,
      loadMore,
      pageStart,
      ref,
      threshold,
      useCapture,
      useWindow,
      ...other
    } = this.props;

    other.ref = (node) => {
      this.scrollComponent = node;
      if (ref) {
        ref(node);
      }
    };

    const childrenArray = [children];
    if (hasMore) {
      if (loadingIndicatorComponent) {
        if (isReverse) {
          childrenArray.unshift(loadingIndicatorComponent);
        } else {
          childrenArray.push(loadingIndicatorComponent);
        }
      } else if (this.defaultLoader) {
        if (isReverse) {
          childrenArray.unshift(this.defaultLoader);
        } else {
          childrenArray.push(this.defaultLoader);
        }
      }
    }
    return React.createElement(element, other, childrenArray);
  }
}

InfiniteScroll.defaultProps = {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  ref: null,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  useCapture: false,
  loadingIndicatorComponent: null,
};

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  hasMore: PropTypes.bool,
  initialLoad: PropTypes.bool,
  isReverse: PropTypes.bool,
  loadingIndicatorComponent: PropTypes.node,
  loadMore: PropTypes.func.isRequired,
  pageStart: PropTypes.number,
  ref: PropTypes.func,
  threshold: PropTypes.number,
  useCapture: PropTypes.bool,
  useWindow: PropTypes.bool,
};

export default InfiniteScroll;
