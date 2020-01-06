import styled from 'styled-components';

export const StyledFlexItem = styled.div.attrs(() => ({
  className: 'flex-item',
}))`
  ${props => props.flex >= 0 ? `flex: ${props.flex};` : ''}
`;
