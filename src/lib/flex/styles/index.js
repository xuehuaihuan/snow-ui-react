import styled from 'styled-components';

export const StyledFlex = styled.div.attrs(() => ({
  className: 'flex',
}))`
  display: flex;
  ${props => props.alignItems ? `align-items: ${props.alignItems}` : ''}
`;
