import styled from 'styled-components'
import {
  RIPPLE_CLASS,
  RIPPLE_LIST_CLASS, RIPPLE_ITEM_CLASS,
  RIPPLE_EFFECT, RIPPLE_EFFECT_CLASS
} from '../constant'

export const StyledRipple = styled.div.attrs(() => ({
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
`

export const StyledRippleItem = styled.div.attrs(() => ({
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
`
