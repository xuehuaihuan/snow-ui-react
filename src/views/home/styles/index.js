import styled from 'styled-components';

const StyledHome = styled.div`
  background-color: ${props => props.theme.lightColor};

  .flex {
    padding: ${props => props.theme.scpx(10)} ${props => props.theme.scpx(15)};
    transition: background-color linear 300ms;

    &:active {
      background-color: ${props => props.theme.generalColor8};
    }
  }
`;

export default StyledHome;
