import { createGlobalStyle } from 'styled-components'

export const GlobalTextStyle = createGlobalStyle`
  /* 文本对齐方式 */
  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-justify {
    text-align: justify;
  }

  /* 颜色 */
  .color-major {
    color: ${props => props.theme.majorColor};
  }

  .color-minor {
    color: ${props => props.theme.minorColor};
  }

  .color-plain {
    color: ${props => props.theme.plainColor};
  }

  .color-success {
    color: ${props => props.theme.successColor};
  }

  .color-info {
    color: ${props => props.theme.infoColor};
  }

  .color-danger {
    color: ${props => props.theme.dangerColor};
  }

  .color-warning {
    color: ${props => props.theme.warningColor};
  }

  .color-general-1 {
    color: ${props => props.theme.generalColor1};
  }

  .color-general-2 {
    color: ${props => props.theme.generalColor2};
  }

  .color-general-3 {
    color: ${props => props.theme.generalColor3};
  }

  .color-general-4 {
    color: ${props => props.theme.generalColor4};
  }

  .color-general-5 {
    color: ${props => props.theme.generalColor5};
  }

  .color-general-6 {
    color: ${props => props.theme.generalColor6};
  }

  .color-general-7 {
    color: ${props => props.theme.generalColor7};
  }

  .tip-info {
    ol {
      list-style: inside decimal;
    }
    padding: ${props => props.theme.scpx(10)} ${props => props.theme.scpx(20)};
    background-color: ${props => props.theme.infoColorLight30};
    color: ${props => props.theme.infoColor};
    font-size: ${props => props.theme.scpx(12)};
  }

  .tip-warning {
    ol {
      list-style: inside decimal;
    }
    padding: ${props => props.theme.scpx(10)} ${props => props.theme.scpx(20)};
    background-color: ${props => props.theme.warningColorLight30};
    color: ${props => props.theme.warningColor};
    font-size: ${props => props.theme.scpx(12)};
  }
`
