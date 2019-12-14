import styled from 'styled-components';
import { StyledBase } from '../base';

export const StyledLineSquareBounce = styled(StyledBase)`
  position: relative;
  width: 1em;
  height: 0.5em;
`;

export const StyledLineSquareBounceInner = styled.span`
  position: absolute;
  top: 50%;
  margin-top: -5%;
  width: 10%;
  height: 20%;
  ${props => props.fgcolor ? `background-color: ${props.fgcolor};` : `background-color: ${props.theme.currentColor}`}
  animation: line-square-bounce 1s ease infinite;

  &:nth-child(1) {
    left: 9%;
    animation-delay: 0.13s;
  }

  &:nth-child(2) {
    left: 27%;
    animation-delay: 0.26s;
  }

  &:nth-child(3) {
    left: 45%;
    animation-delay: 0.39s;
  }

  &:nth-child(4) {
    left: 63%;
    animation-delay: 0.52s;
  }

  &:nth-child(5) {
    left: 81%;
    animation-delay: 0.65s;
  }

  @keyframes line-square-bounce {
    0% {
      opacity: 1;
      transform: scale(1.2);
    }

    100% {
      opacity: 0.2;
      transform: scale(0.2);
    }
  }
`;
