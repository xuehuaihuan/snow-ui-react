import styled from 'styled-components'

export const StyledSpinnerSize = styled.div`
  .spinner-list {
    li {
      padding: ${props => props.theme.scpx(5)} ${props => props.theme.scpx(20)};
    }
  }
`
