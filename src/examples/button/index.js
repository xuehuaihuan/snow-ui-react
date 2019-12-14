import React from 'react';
import StyledButtonExamples from './styles';
import ButtonSkin from './ButtonSkin';
import ButtonGradient from './ButtonGradient';
import ButtonRipple from './ButtonRipple';
import ButtonShape from './ButtonShape';
import ButtonSize from './ButtonSize';
import ButtonBorder from './ButtonBorder';
import ButtonDisabled from './ButtonDisabled';
import ButtonIcon from './ButtonIcon';
import ButtonLoading from './ButtonLoading';
import ButtonTransition from './ButtonTransition';
import ButtonNoActive from './ButtonNoActive';
import ButtonBlock from './ButtonBlock';

const ButtonExamples = () => {
  return (
    <StyledButtonExamples>
      <ButtonSkin />
      <ButtonGradient />
      <ButtonRipple />
      <ButtonShape />
      <ButtonSize />
      <ButtonBorder />
      <ButtonDisabled />
      <ButtonIcon />
      <ButtonLoading />
      <ButtonTransition />
      <ButtonNoActive />
      <ButtonBlock />
    </StyledButtonExamples>
  );
};

export default ButtonExamples;
