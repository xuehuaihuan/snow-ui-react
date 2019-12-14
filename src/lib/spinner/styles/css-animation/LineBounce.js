import styled from 'styled-components'
import { StyledBase } from '../base'

export const StyledLineBounce = styled(StyledBase)`
  position: relative;
  width: 1em;
  height: 0.5em;

  span {
    position: absolute;
    top: 50%;
    border-radius: 0.5em;
    margin-top: -20%;
    width: 8%;
    height: 80%;
    ${props => props.fgcolor ? `background-color: ${props.fgcolor};` : `background-color: ${props.theme.currentColor}`}
    animation: line-bounce 1s ease infinite;

    &:nth-child(1) {
      left: 10%;
      animation-delay: -0.65s;
    }

    &:nth-child(2) {
      left: 28%;
      animation-delay: -0.78s;
    }

    &:nth-child(3) {
      left: 46%;
      animation-delay: -0.91s;
    }

    &:nth-child(4) {
      left: 64%;
      animation-delay: -78s;
    }

    &:nth-child(5) {
      left: 82%;
      animation-delay: -0.65s;
    }
  }

  @keyframes line-bounce {
    0% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(0.3);
    }

    100% {
      transform: scaleY(1);
    }
  }
`
