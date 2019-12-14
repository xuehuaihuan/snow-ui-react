import { createGlobalStyle } from 'styled-components'
import iconNavBeta from '../img/icons/icon-nav-beta.png'

export const GlobalIconStyle = createGlobalStyle`
.icon {
  display: inline-block;
  line-height: 1;
}

.icon-nav-beta {
  width: ${props => props.theme.scpx(57)};
  height: ${props => props.theme.scpx(25)};
  background: url(${iconNavBeta}) center;
  background-size: contain;
}
`
