import styled from 'styled-components'

export const StyledButtonSize = styled.section`
  .button-list {
    > li {
      padding: ${props => props.theme.scpx(5)} ${props => props.theme.scpx(10)};
    }
  }
`
