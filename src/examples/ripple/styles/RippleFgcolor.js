import styled from 'styled-components'

export const StyledRippleFgcolor = styled.section`
  .gradient-image {
    width: ${props => props.theme.scpx(240)};
    height: ${props => props.theme.scpx(240)};
    box-shadow: 0 0 ${props => props.theme.scpx(6)} ${props => props.theme.darkColorOpacity20};
  }

  /* by Lea Verou */
  .seigaiha {
    background-color: silver;
    background-image:
      radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
      radial-gradient(circle at 0    150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
      radial-gradient(circle at 50%  100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent),
      radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent),
      radial-gradient(circle at 0    50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent);
    background-size: 100px 50px;
  }

  /* by Lea Verou */
  .starry-night {
    background-color: black;
    background-image:
      radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 40px),
      radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
      radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
      radial-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  }

  /* by Paul Salentiny */
  .honey-comb {
    background:
      radial-gradient(circle farthest-side at 0% 50%, #fb1 23.5%, rgba(240, 166, 17, 0) 0) 21px 30px,
      radial-gradient(circle farthest-side at 0% 50%, #b71 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
      linear-gradient(#fb1 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #fb1 0) 0 0,
      linear-gradient(150deg, #fb1 24%, #b71 0, #b71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #b71 0, #b71 76%, #fb1 0) 0 0,
      linear-gradient(30deg, #fb1 24%, #b71 0, #b71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #b71 0, #b71 76%, #fb1 0) 0 0,
      linear-gradient(90deg, #b71 2%, #fb1 0, #fb1 98%, #b71 0%) 0 0 #fb1;
    background-size: 40px 60px;
  }
`
