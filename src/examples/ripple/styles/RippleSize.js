import styled from 'styled-components'

export const StyledRippleSize = styled.section`
  .gradient-image {
    width: ${props => props.theme.scpx(320)};
    height: ${props => props.theme.scpx(160)};
    box-shadow: 0 0 ${props => props.theme.scpx(6)} ${props => props.theme.darkColorOpacity20};
  }

  /*  by Sarah Backhouse */
  .line-paper {
    background-color: #fff;
    background-image:
      linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
      linear-gradient(#eee 0.1em, transparent 0.1em);
    background-size: 100% 1.2em;
  }

  /* Carbon by Atle Mo (design), Sébastien Grosjean (code) */
  .carbon {
    background:
      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0,
      linear-gradient(27deg, #222 5px, transparent 5px) 0 10px,
      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
    background-color: #131313;
    background-size: 20px 20px;
  }
`
