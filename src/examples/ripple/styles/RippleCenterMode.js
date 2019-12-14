import styled from 'styled-components'

export const StyledRippleCenterMode = styled.section`
  .gradient-image {
    box-shadow: 0 0 ${props => props.theme.scpx(6)} ${props => props.theme.darkColorOpacity20};
  }

  li:nth-of-type(1) .gradient-image {
    width: ${props => props.theme.scpx(320)};
    height: ${props => props.theme.scpx(160)};
  }

  li:nth-of-type(2) .gradient-image {
    width: ${props => props.theme.scpx(160)};
    height: ${props => props.theme.scpx(160)};
  }

  li:nth-of-type(3) .gradient-image {
    width: ${props => props.theme.scpx(160)};
    height: ${props => props.theme.scpx(100)};
  }

  li:nth-of-type(4) .gradient-image {
    width: ${props => props.theme.scpx(80)};
    height: ${props => props.theme.scpx(160)};
  }

  li:nth-of-type(5) .gradient-image {
    width: ${props => props.theme.scpx(360)};
    height: ${props => props.theme.scpx(100)};
  }

  li:nth-of-type(6) .gradient-image {
    width: ${props => props.theme.scpx(160)};
    height: ${props => props.theme.scpx(80)};
  }

  li:nth-of-type(7) .gradient-image {
    width: ${props => props.theme.scpx(160)};
    height: ${props => props.theme.scpx(320)};
  }

  li:nth-of-type(8) .gradient-image {
    width: ${props => props.theme.scpx(300)};
    height: ${props => props.theme.scpx(100)};
  }

  /* by Natali Davydova */
  .cross-dots {
    background:
      radial-gradient(black 3px, transparent 4px),
      radial-gradient(black 3px, transparent 4px),
      linear-gradient(#fff 4px, transparent 0),
      linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
      linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
      #fff;
    background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0 0, 0 0, 0 0, 0 0;
  }

  /* by Atle Mo (design), Lea Verou (code) */
  .carbon-fibre {
    background:
      radial-gradient(black 15%, transparent 16%) 0 0,
      radial-gradient(black 15%, transparent 16%) 8px 8px,
      radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
    background-color: #282828;
    background-size: 16px 16px;
  }
`
