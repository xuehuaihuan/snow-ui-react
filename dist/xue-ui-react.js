/*!
  * xue-ui-react v1.0.0
  * (c) 2020 Huaihuan Xue
  * @license MIT
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components'], factory) :
    (global = global || self, factory(global.XueUIReact = {}, global.React, global.styled));
}(this, (function (exports, React, styled) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    styled = styled && Object.prototype.hasOwnProperty.call(styled, 'default') ? styled['default'] : styled;

    /**
     * xx-small - 极极小
     * @constant { String } XXS
     */
    var XXS = 'xxs';
    /**
     * x-small - 极小
     * @constant { String } XS
     */
    var XS = 'xs';
    /**
     * small - 小
     * @constant { String } SM
     */
    var SM = 'sm';
    /**
     * medium - 中
     * @constant { String } MD
     */
    var MD = 'md';
    /**
     * large - 大
     * @constant { String } LG
     */
    var LG = 'lg';
    /**
     * x-large - 极大
     * @constant { String } XL
     */
    var XL = 'xl';
    /**
     * xx-large - 极极大
     * @constant { String } XXL
     */
    var XXL = 'xxl';

    var defaultProps = {
        centerMode: false,
        fgcolor: '',
        size: MD,
    };

    /**
     * class of - 是否为Class
     * @param  { String } className Class name in JavaScript
     * @return { Function } as follows: - 如下：
     */
    var classOf = function (className) {
        return function (obj) {
            return Object.prototype.toString.call(obj).slice(8, -1) === `${className}`;
        };
    };
    /**
     * is number - 是否为Number类型
     * @param  { Null | Undefined |  String | Boolean | Number ｜ Object | Symbol } obj any Object of JavaScript
     * @return { Boolean }
     */
    var isNumber = classOf('Number');

    function addClass(elem, className) {
        var classes = className.split(/\s+/);
        for (var cName of classes) {
            elem.classList.add(cName);
        }
    }
    function css(elem, style) {
        for (var s in style) {
            if (Object.prototype.hasOwnProperty.call(style, s)) {
                elem.style[s] = style[s];
            }
        }
    }

    var getRect = function (elem) {
        return elem.getBoundingClientRect();
    };
    var getTouchEvent = function () {
        var isMobile = 'ontouchstart' in document;
        var event;
        if (isMobile) {
            event = {
                touchstart: 'touchstart',
                touchmove: 'touchmove',
                touchend: 'touchend',
                mobile: true,
            };
        }
        else {
            event = {
                touchstart: 'mousedown',
                touchmove: 'mousemove',
                touchend: 'mouseup',
                mobile: false,
            };
        }
        return event;
    };
    var genGetScroll = function (type) {
        var docEl = document.documentElement || document.body.parentNode;
        return function () {
            return isNumber(docEl[type]) ? docEl[type] : document.body[type];
        };
    };
    var getScrollTop = genGetScroll('scrollTop');
    var getScrollLeft = genGetScroll('scrollLeft');

    var RIPPLE_PREFIX = 'ripple';
    var RIPPLE_CLASS = RIPPLE_PREFIX;
    var RIPPLE_LIST_CLASS = `${RIPPLE_PREFIX}-list`;
    var RIPPLE_ITEM_CLASS = `${RIPPLE_PREFIX}-item`;
    var RIPPLE_EFFECT = `${RIPPLE_PREFIX}-effect`;
    var RIPPLE_EFFECT_CLASS = RIPPLE_EFFECT;

    var StyledRipple = styled.div.attrs(function () { return ({
        className: RIPPLE_CLASS,
    }); }) `
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
    ${function (props) { return props.fgcolor ? `color: ${props.fgcolor};` : ''; }}
  }
`;
    var StyledRippleItem = styled.div.attrs(function () { return ({
        className: RIPPLE_ITEM_CLASS,
    }); }) `
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  ${function (props) { return props.fgcolor ? `background-color: ${props.fgcolor};` : 'background-color: currentcolor;'; }}
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

    var sizes = [XXS, XS, SM, MD, LG, XL, XXL];
    var getSize = function (size) {
        size = size && sizes.includes(size) ? size : MD;
        var scale;
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

    function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
    var Ripple = /*@__PURE__*/(function (Component) {
        function Ripple(props) {
            var this$1 = this;

            Component.call(this, props);
            this.now = Date.now() || (+new Date());
            this.seed = 0;
            this.props = {};
            this.state = {
                children: [],
            };
            this.getUuid = function () {
                return `${RIPPLE_ITEM_CLASS}-${this$1.now}-${this$1.seed++}`;
            };
            this.getRef = function (node) {
                this$1.rippleNode = node;
            };
            this.ripple = function (event, element) {
                var touchEvent = this$1.getPoint(event);
                var ref = this$1.props;
                var centerMode = ref.centerMode;
                var size = ref.size;
                var scrollTop = getScrollTop();
                var scrollLeft = getScrollLeft();
                var clientX = touchEvent.clientX || (touchEvent.pageX - scrollLeft);
                var clientY = touchEvent.clientY || (touchEvent.pageY - scrollTop);
                var parentNode = this$1.rippleNode.parentNode;
                var offsetWidth = parentNode.offsetWidth;
                var offsetHeight = parentNode.offsetHeight;
                var rippleItemSize = Math.max(offsetWidth, offsetHeight);
                var rect = getRect(parentNode);
                var x = 0;
                var y = 0;
                var scale = getSize(size);
                if (centerMode) {
                    x = (offsetWidth - rippleItemSize * scale) / 2;
                    y = (offsetHeight - rippleItemSize * scale) / 2;
                }
                else {
                    x = clientX - rect.left - rippleItemSize * scale / 2;
                    y = clientY - rect.top - rippleItemSize * scale / 2;
                }
                var width = rippleItemSize * scale + 'px';
                var height = rippleItemSize * scale + 'px';
                css(element, {
                    width: width,
                    height: height,
                    top: y + 'px',
                    left: x + 'px',
                });
                addClass(element, RIPPLE_EFFECT_CLASS);
            };
            this.handleTouchStart = function (event) {
                var children = [].concat( this$1.state.children );
                children.push(this$1.getUuid());
                this$1.setState(function () { return ({ children: children }); }, function () {
                    var activeIndex = children.length - 1;
                    var rippleChildren = this$1.rippleNode.querySelectorAll(`.${RIPPLE_ITEM_CLASS}`);
                    if (rippleChildren[activeIndex]) {
                        this$1.ripple(event, rippleChildren[activeIndex]);
                    }
                });
            };
            this.handleAnimationEnd = function (key) {
                var children = (this$1.state.children).filter(function (child) {
                    return key !== child;
                });
                this$1.setState({ children: children });
            };
            this.touchEvent = getTouchEvent();
        }

        if ( Component ) Ripple.__proto__ = Component;
        Ripple.prototype = Object.create( Component && Component.prototype );
        Ripple.prototype.constructor = Ripple;
        Ripple.prototype.componentDidMount = function componentDidMount () {
            if (this.rippleNode) {
                this.rippleNode.parentNode.addEventListener(this.touchEvent.touchstart, this.handleTouchStart);
            }
        };
        Ripple.prototype.componentWillUnmount = function componentWillUnmount () {
            if (this.rippleNode) {
                this.rippleNode.parentNode.removeEventListener(this.touchEvent.touchstart, this.handleTouchStart);
            }
            this.rippleNode = null;
            this.touchEvent = null;
        };
        Ripple.prototype.getPoint = function getPoint (event) {
            event = event || window.event;
            return this.touchEvent.mobile ? event.changedTouches[0] : event;
        };
        Ripple.prototype.render = function render () {
            var this$1 = this;

            var ref = this.props;
            var children = ref.children;
            var centerMode = ref.centerMode;
            var rest = objectWithoutProperties( ref, ["children", "centerMode"] );
            var otherProps = rest;
            return (React__default.createElement(StyledRipple, Object.assign({}, otherProps),
                React__default.createElement("div", { className: RIPPLE_LIST_CLASS, ref: this.getRef }, (this.state.children).map(function (child) {
                    return (React__default.createElement(StyledRippleItem, { key: child, onAnimationEnd: function () { return this$1.handleAnimationEnd(child); } }));
                })),
                children));
        };

        return Ripple;
    }(React.Component));
    Ripple.defaultProps = defaultProps;

    exports.Ripple = Ripple;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
