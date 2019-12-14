import React, { Component } from 'react';
import defaultProps from './defaultProps';
import propTypes from './propTypes';
import {
  getTouchEvent, getRect, getScrollLeft, getScrollTop,
  css, addClass,
} from '../common/utils';
import { StyledRipple, StyledRippleItem } from './styles';
import { RIPPLE_LIST_CLASS, RIPPLE_ITEM_CLASS, RIPPLE_EFFECT_CLASS } from './constant';
import { getSize } from './styles/size';

export class Ripple extends Component {
  constructor (props) {
    super(props);
    this.touchEvent = getTouchEvent();
    this.now = Date.now() || (+new Date());
    this.seed = 0;
    this.state = {
      children: [],
    };
  }

  componentDidMount () {
    if (this.rippleNode) {
      this.rippleNode.parentNode.addEventListener(this.touchEvent.touchstart, this.handleTouchStart);
    }
  }

  componentWillUnmount () {
    if (this.rippleNode) {
      this.rippleNode.parentNode.removeEventListener(this.touchEvent.touchstart, this.handleTouchStart);
    }
    this.rippleNode = null;
    this.touchEvent = null;
  }

  getUuid = () => {
    return `${RIPPLE_ITEM_CLASS}-${this.now}-${this.seed++}`;
  }

  getRef = (node) => {
    this.rippleNode = node;
  }

  getPoint (event) {
    event = event || window.event;
    return this.touchEvent.mobile ? event.changedTouches[0] : event;
  }

  ripple = (event, element) => {
    const touchEvent = this.getPoint(event);
    const { centerMode, size } = this.props;
    const scrollTop = getScrollTop();
    const scrollLeft = getScrollLeft();
    const clientX = touchEvent.clientX || (touchEvent.pageX - scrollLeft);
    const clientY = touchEvent.clientY || (touchEvent.pageY - scrollTop);
    const parentNode = this.rippleNode.parentNode;
    const { offsetWidth, offsetHeight } = parentNode;
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
      left: x + 'px',
    });
    addClass(element, RIPPLE_EFFECT_CLASS);
  }

  handleTouchStart = (event) => {
    const children = [...this.state.children];
    children.push(this.getUuid());
    this.setState(() => ({ children }), () => {
      const activeIndex = children.length - 1;
      const rippleChildren = this.rippleNode.querySelectorAll(`.${RIPPLE_ITEM_CLASS}`);
      if (rippleChildren[activeIndex]) {
        this.ripple(event, rippleChildren[activeIndex]);
      }
    });
  }

  handleAnimationEnd = (key) => {
    const children = (this.state.children).filter((child) => {
      return key !== child;
    });
    this.setState({ children });
  }

  render () {
    const { children, centerMode, ...otherProps } = this.props;

    return (
      <StyledRipple
        {...otherProps}
      >
        <div
          className={RIPPLE_LIST_CLASS}
          ref={this.getRef}
        >
          {
            (this.state.children).map((child) => {
              return (
                <StyledRippleItem
                  key={child}
                  onAnimationEnd={() => this.handleAnimationEnd(child)}
                />
              );
            })
          }
        </div>
        {children}
      </StyledRipple>
    );
  }
}

Ripple.defaultProps = defaultProps;

Ripple.propTypes = propTypes;

export default Ripple;
