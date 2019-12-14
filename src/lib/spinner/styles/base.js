import styled from 'styled-components';
import { getSize } from './size';

export const StyledBase = styled.span`
  display: inline-block;
  ${props => `font-size: ${getSize(props.size, props.theme.scpx)};`}
  line-height: 1;
`;

export const StyledSpinner = styled(StyledBase)`
  position: relative;
  width: 1em;
  height: 1em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border: 0.05em solid;
    ${props => props.fgcolor ? `border-color: ${props.fgcolor};` : `border-color: ${props.theme.currentColor};`}
    border-radius: 50%;
    border-right-color: ${props => props.theme.transparent};
    width: 100%;
    height: 100%;
    animation: snake-spin 0.8s infinite linear;
  }

  @keyframes snake-spin {
    0% { transform: rotate(0); }
    to { transform: rotate(1turn); }
  }
`;
