import styled from 'styled-components'
import { StyledBase } from './base'

export const StyledImage = styled(StyledBase)`
  position: relative;
  width: 1em;
  height: 1em;

  img,
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  [fill]:not([fill='none']) {
    ${props => (`fill: ${(props.image.fill && props.fgcolor) ? props.fgcolor : props.theme.currentColor};`)}
  }

  [stroke]:not([stroke='none']) {
    ${props => (`stroke: ${(props.image.stroke && props.fgcolor) ? props.fgcolor : props.theme.currentColor};`)}
  }

  [stop-color] {
    ${props => (`stop-color: ${(props.image.stopColor && props.fgcolor) ? props.fgcolor : props.theme.currentColor};`)}
  }
`
