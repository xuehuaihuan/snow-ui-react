import styled from 'styled-components';

export const StyledButtonSkin = styled.section`
  .button-list {
    > li {
      padding: ${props => props.theme.scpx(5)} ${props => props.theme.scpx(10)};
    }
  }
`;
