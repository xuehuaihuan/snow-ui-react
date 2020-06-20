import React, { Component } from 'react';
import defaultProps from './defaultProps';
import { RippleProps, RippleState } from './PropsType';
import {
  getTouchEvent, getRect, getScrollLeft, getScrollTop,
  css, addClass,
} from '../common/utils';
import { StyledRipple, StyledRippleItem } from './styles';
import { RIPPLE_LIST_CLASS, RIPPLE_ITEM_CLASS, RIPPLE_EFFECT_CLASS } from './constants';
import { getSize } from './styles/size';

export class Ripple extends Component<RippleProps, RippleState> {
  static defaultProps: RippleProps = defaultProps;

  touchEvent: any;
  rippleNode: any;
  now: any = Date.now() || (+new Date());
  seed = 0;
  props: RippleProps = {}
  setState: any;
  state: RippleState = {
    children: [],
  };

  constructor (props: RippleProps) {
    super(props);
    this.touchEvent = getTouchEvent();
  }

  componentDidMount ():void {
    if (this.rippleNode) {
      this.rippleNode.parentNode.addEventListener(this.touchEvent.touchstart, this.handleTouchStart);
    }
  }

  componentWillUnmount (): void {
    if (this.rippleNode) {
      this.rippleNode.parentNode.removeEventListener(this.touchEvent.touchstart, this.handleTouchStart);
    }
    this.rippleNode = null;
    this.touchEvent = null;
  }

  getUuid = (): string => {
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

    const width = rippleItemSize * scale + 'px';
    const height = rippleItemSize * scale + 'px';

    css(element, {
      width: width,
      height: height,
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

export default Ripple;
