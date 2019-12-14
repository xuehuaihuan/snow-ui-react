import styled from 'styled-components';

const StyledExamples = styled.div`
  background-color: ${props => props.theme.generalColor9};

  .section-item {
    box-shadow: 0 ${props => props.theme.scpx(2)} ${props => props.theme.scpx(2)} ${props => props.theme.darkColorOpacity10};
    background-color: ${props => props.theme.lightColor};

    .spinner-plain-container {
      background-color: ${props => props.theme.darkColor};
    }

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

export default StyledExamples;
