import styled from 'styled-components'

export const StyledFlexItem = styled.div`
  ${props => props.flex >= 0 ? `flex: ${props.flex};` : ''}
`
