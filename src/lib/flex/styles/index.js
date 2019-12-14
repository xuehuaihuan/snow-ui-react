import styled from 'styled-components'

export const StyledFlex = styled.div`
  display: flex;
  ${props => props.alignItems ? `align-items: ${props.alignItems}` : ''}
`
