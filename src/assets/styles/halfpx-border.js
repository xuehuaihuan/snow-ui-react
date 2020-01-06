import { createGlobalStyle } from 'styled-components';

export const GlobalHalfpxBorderStyle = createGlobalStyle`
  .halfpx-border { position: relative; }

  .halfpx-border::before {
    content: '';
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    border: 0 solid ${props => props.theme.bordergeneralColor1};
  }

  .border-all::before,
  .border-top::before,
  .border-left::before {
    top: 0;
    left: 0;
    transform-origin: left top;
  }

  .border-right::before,
  .border-bottom::before {
    right: 0;
    bottom: 0;
    transform-origin: right bottom;
  }

  .border-all::before {
    border-width: 1px;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
  }

  .border-top::before,
  .border-bottom::before {
    width: 100%;
    height: 0;
    transform: scaleY(0.5);
  }

  .border-right::before,
  .border-left::before {
    width: 0;
    height: 100%;
    transform: scaleX(0.5);
  }

  .border-top::before {
    border-top-width: 1px;
  }

  .border-right::before {
    border-right-width: 1px;
  }

  .border-bottom::before {
    border-bottom-width: 1px;
  }

  .border-left::before {
    border-left-width: 1px;
  }

  .dashed.halfpx-border::before {
    border-style: dashed;
  }
`;
