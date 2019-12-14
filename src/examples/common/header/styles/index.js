import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: ${props => props.theme.scpx(1)} solid ${props => props.theme.bordergeneralColor1};
  padding: ${props => props.theme.scpx(10)} ${props => props.theme.scpx(20)};

  .title {
    font-size: ${props => props.theme.scpx(18)};
  }

  .subtitle {
    font-size: ${props => props.theme.scpx(14)};
    color: ${props => props.theme.generalColor2};
  }
`;

export default StyledHeader;
