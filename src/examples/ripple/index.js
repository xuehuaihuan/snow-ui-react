import React from 'react';
import { StyledRippleExamples } from './styles';
import RippleFgcolor from './RippleFgcolor';
import RippleSize from './RippleSize';
import RippleCenterMode from './RippleCenterMode';

export const RippleExamples = (props) => {
  return (
    <StyledRippleExamples>
      <RippleFgcolor />
      <RippleSize />
      <RippleCenterMode />
    </StyledRippleExamples>
  );
};

export default RippleExamples;
