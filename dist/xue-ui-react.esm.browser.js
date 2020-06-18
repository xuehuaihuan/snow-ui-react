/*!
  * xue-ui-react v1.0.0
  * (c) 2020 Huaihuan Xue
  * @license MIT
  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * xx-small - 极极小
 * @constant { String } XXS
 */
const XXS = 'xxs';
/**
 * x-small - 极小
 * @constant { String } XS
 */

const XS = 'xs';
/**
 * small - 小
 * @constant { String } SM
 */

const SM = 'sm';
/**
 * medium - 中
 * @constant { String } MD
 */

const MD = 'md';
/**
 * large - 大
 * @constant { String } LG
 */

const LG = 'lg';
/**
 * x-large - 极大
 * @constant { String } XL
 */

const XL = 'xl';
/**
 * xx-large - 极极大
 * @constant { String } XXL
 */

const XXL = 'xxl';

const defaultProps = {
  centerMode: false,
  fgcolor: '',
  size: MD
};

const propTypes = {
  centerMode: PropTypes.bool,
  fgcolor: PropTypes.string,
  size: PropTypes.string
};

/**
 * class of - 是否为Class
 * @param  { String } className Class name in JavaScript
 * @return { Function } as follows: - 如下：
 */
const classOf = className => {
  return function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === `${className}`;
  };
};
/**
 * is number - 是否为Number类型
 * @param  { Null | Undefined |  String | Boolean | Number ｜ Object | Symbol } obj any Object of JavaScript
 * @return { Boolean }
 */

const isNumber = classOf('Number');

function addClass(elem, className) {
  const classes = className.split(/\s+/);

  for (const cName of classes) {
    elem.classList.add(cName);
  }
}
function css(elem, style) {
  for (const s in style) {
    if (Object.prototype.hasOwnProperty.call(style, s)) {
      elem.style[s] = style[s];
    }
  }
}

const getRect = elem => {
  return elem.getBoundingClientRect();
};
const getTouchEvent = () => {
  const isMobile = ('ontouchstart' in document);
  let event;

  if (isMobile) {
    event = {
      touchstart: 'touchstart',
      touchmove: 'touchmove',
      touchend: 'touchend',
      mobile: true
    };
  } else {
    event = {
      touchstart: 'mousedown',
      touchmove: 'mousemove',
      touchend: 'mouseup',
      mobile: false
    };
  }

  return event;
};

const genGetScroll = type => {
  const docEl = document.documentElement || document.body.parentNode;
  return function () {
    return isNumber(docEl[type]) ? docEl[type] : document.body[type];
  };
};

const getScrollTop = genGetScroll('scrollTop');
const getScrollLeft = genGetScroll('scrollLeft');

/**
 * ripple prefix - 涟漪前缀
 * @constant { String } RIPPLE_PREFIX
 */
const RIPPLE_PREFIX = 'ripple';
/**
* ripple prefix - 涟漪类
* @constant { String } RIPPLE_CLASS
*/

const RIPPLE_CLASS = RIPPLE_PREFIX;
/**
 * ripple child class - 涟漪项目类
 * @constant { String } RIPPLE_LIST_CLASS
 */

const RIPPLE_LIST_CLASS = `${RIPPLE_PREFIX}-list`;
/**
 * ripple child class - 涟漪项目类
 * @constant { String } RIPPLE_ITEM_CLASS
 */

const RIPPLE_ITEM_CLASS = `${RIPPLE_PREFIX}-item`;
/**
 * ripple effect - 涟漪效果
 * @constant { String } RIPPLE_EFFECT
 */

const RIPPLE_EFFECT = `${RIPPLE_PREFIX}-effect`;
/**
 * ripple effect class - 涟漪效果类
 * @constant { String } RIPPLE_EFFECT_CLASS
 */

const RIPPLE_EFFECT_CLASS = RIPPLE_EFFECT;

const StyledRipple = styled.div.attrs(() => ({
  className: RIPPLE_CLASS
}))`
  display: inline-block;
  position: relative;

  .${RIPPLE_LIST_CLASS} {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    ${props => props.fgcolor ? `color: ${props.fgcolor};` : ''}
  }
`;
const StyledRippleItem = styled.div.attrs(() => ({
  className: RIPPLE_ITEM_CLASS
}))`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  ${props => props.fgcolor ? `background-color: ${props.fgcolor};` : 'background-color: currentcolor;'}
  opacity: 0.5;
  transform: scale(0);
  will-change: height, transform, width;

  &.${RIPPLE_EFFECT_CLASS} {
    animation: ${RIPPLE_EFFECT} 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes ${RIPPLE_EFFECT} {
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

/**
 * get size - 获取尺寸样式
 * @param  {Object} size
 * @return {String} as follows: - 如下：
 */

const sizes = [XXS, XS, SM, MD, LG, XL, XXL];
const getSize = size => {
  size = size && sizes.includes(size) ? size : MD;
  let scale;

  switch (size) {
    case 'xxs':
      scale = 0.5;
      break;

    case 'xs':
      scale = 0.75;
      break;

    case 'sm':
      scale = 1;
      break;

    case 'md':
      scale = 2;
      break;

    case 'lg':
      scale = 3;
      break;

    case 'xl':
      scale = 4;
      break;

    case 'xxl':
    default:
      scale = 5;
      break;
  }

  return scale;
};

class Ripple extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getUuid", () => {
      return `${RIPPLE_ITEM_CLASS}-${this.now}-${this.seed++}`;
    });

    _defineProperty(this, "getRef", node => {
      this.rippleNode = node;
    });

    _defineProperty(this, "ripple", (event, element) => {
      const touchEvent = this.getPoint(event);
      const {
        centerMode,
        size
      } = this.props;
      const scrollTop = getScrollTop();
      const scrollLeft = getScrollLeft();
      const clientX = touchEvent.clientX || touchEvent.pageX - scrollLeft;
      const clientY = touchEvent.clientY || touchEvent.pageY - scrollTop;
      const parentNode = this.rippleNode.parentNode;
      const {
        offsetWidth,
        offsetHeight
      } = parentNode;
      const rippleItemSize = Math.max(offsetWidth, offsetHeight);
      const rect = getRect(parentNode);
      let x = 0;
      let y = 0;
      const scale = getSize(size);

      if (centerMode) {
        x = (offsetWidth - rippleItemSize * scale) / 2;
        y = (offsetHeight - rippleItemSize * scale) / 2;
      } else {
        x = clientX - rect.left - rippleItemSize * scale / 2;
        y = clientY - rect.top - rippleItemSize * scale / 2;
      }

      css(element, {
        width: rippleItemSize * scale + 'px',
        height: rippleItemSize * scale + 'px',
        top: y + 'px',
        left: x + 'px'
      });
      addClass(element, RIPPLE_EFFECT_CLASS);
    });

    _defineProperty(this, "handleTouchStart", event => {
      const children = [...this.state.children];
      children.push(this.getUuid());
      this.setState(() => ({
        children
      }), () => {
        const activeIndex = children.length - 1;
        const rippleChildren = this.rippleNode.querySelectorAll(`.${RIPPLE_ITEM_CLASS}`);

        if (rippleChildren[activeIndex]) {
          this.ripple(event, rippleChildren[activeIndex]);
        }
      });
    });

    _defineProperty(this, "handleAnimationEnd", key => {
      const children = this.state.children.filter(child => {
        return key !== child;
      });
      this.setState({
        children
      });
    });

    this.touchEvent = getTouchEvent();
    this.now = Date.now() || +new Date();
    this.seed = 0;
    this.state = {
      children: []
    };
  }

  componentDidMount() {
    if (this.rippleNode) {
      this.rippleNode.parentNode.addEventListener(this.touchEvent.touchstart, this.handleTouchStart);
    }
  }

  componentWillUnmount() {
    if (this.rippleNode) {
      this.rippleNode.parentNode.removeEventListener(this.touchEvent.touchstart, this.handleTouchStart);
    }

    this.rippleNode = null;
    this.touchEvent = null;
  }

  getPoint(event) {
    event = event || window.event;
    return this.touchEvent.mobile ? event.changedTouches[0] : event;
  }

  render() {
    const {
      children,
      centerMode,
      ...otherProps
    } = this.props;
    return /*#__PURE__*/React.createElement(StyledRipple, otherProps, /*#__PURE__*/React.createElement("div", {
      className: RIPPLE_LIST_CLASS,
      ref: this.getRef
    }, this.state.children.map(child => {
      return /*#__PURE__*/React.createElement(StyledRippleItem, {
        key: child,
        onAnimationEnd: () => this.handleAnimationEnd(child)
      });
    })), children);
  }

}
Ripple.defaultProps = defaultProps;
Ripple.propTypes = propTypes;

export { Ripple };
