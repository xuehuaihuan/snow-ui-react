import styled from 'styled-components';
import { StyledBase } from '../base';

export const StyledCircleScaleFade = styled(StyledBase)`
  position: relative;
  width: 1em;
  height: 1em;

  span {
    position: absolute;
    width: 15%;
    height: 15%;
    border-radius: 50%;
    ${props => props.fgcolor ? `background-color: ${props.fgcolor};` : `background-color: ${props.theme.currentColor}`}
    animation: circle-scale-fade 1s ease infinite;

    &:nth-child(1) {
      top: 42.5%;
      left: 0;
      animation-delay: -1.04s;
    }

    &:nth-child(2) {
      top: 15%;
      left: 12%;
      animation-delay: -0.91s;
    }

    &:nth-child(3) {
      top: 0;
      left: 42.5%;
      animation-delay: -0.78s;
    }

    &:nth-child(4) {
      right: 12%;
      top: 15%;
      animation-delay: -0.65s;
    }

    &:nth-child(5) {
      right: 0;
      top: 42.5%;
      animation-delay: -0.52s;
    }

    &:nth-child(6) {
      bottom: 16%;
      right: 12%;
      animation-delay: -0.39s;
    }

    &:nth-child(7) {
      bottom: 0;
      left: 42.5%;
      animation-delay: -0.26s;
    }

    &:nth-child(8) {
      left: 12%;
      bottom: 16%;
      animation-delay: -0.13s;
    }
  }

  @keyframes circle-scale-fade {
    0% {
      opacity: 0.25;
      transform: scale(0.2);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
