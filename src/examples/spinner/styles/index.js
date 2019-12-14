import styled from 'styled-components';

export const StyledSpinnerExamples = styled.div`
  .spinner-list {
    li {
      text-align: center;
      font-size: ${props => props.theme.scpx(32)};

      .subtitle {
        margin-top: ${props => props.theme.scpx(10)};
        font-size: ${props => props.theme.scpx(12)};
      }
    }
  }
`;
