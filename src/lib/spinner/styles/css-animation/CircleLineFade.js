import styled from 'styled-components';
import { StyledBase } from '../base';

export const StyledCircleLineFade = styled(StyledBase)`
  position: relative;
  width: 1em;
  height: 1em;

  span {
    position: absolute;
    width: 30%;
    height: 8%;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    ${props => props.fgcolor ? `background-color: ${props.fgcolor};` : `background-color: ${props.theme.currentColor}`}
    opacity: 0.05;
    animation: circle-line 1s ease infinite;

    &:nth-child(1) {
      top: 42.5%;
      left: 0;
      animation-delay: -1.04s;
    }

    &:nth-child(2) {
      top: 20%;
      left: 8%;
      transform: rotate(45deg);
      animation-delay: 0.26s;
    }

    &:nth-child(3) {
      left: 35%;
      top: 10%;
      transform: rotate(90deg);
      animation-delay: 0.39s;
    }

    &:nth-child(4) {
      right: 8%;
      top: 20%;
      transform: rotate(145deg);
      animation-delay: 0.52s;
    }

    &:nth-child(5) {
      right: 0;
      top: 46%;
      transform: rotate(180deg);
      animation-delay: 0.65s;
    }

    &:nth-child(6) {
      bottom: 20%;
      right: 8%;
      transform: rotate(-145deg);
      animation-delay: 0.78s;
    }

    &:nth-child(7) {
      left: 35%;
      bottom: 10%;
      transform: rotate(-90deg);
      animation-delay: 0.91s;
    }

    &:nth-child(8) {
      bottom: 20%;
      left: 8%;
      transform: rotate(-45deg);
      animation-delay: 1.04s;
    }
  }

  @keyframes circle-line {
    0% {
      opacity: 0.05;
    }

    100% {
      opacity: 0.7;
    }
  }
`;
