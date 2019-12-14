import React from 'react';
import { StyledSpinnerExamples } from './styles';
import SpinnerFgcolor from './SpinnerFgcolor';
import SpinnerSize from './SpinnerSize';
import SpinnerEffect from './SpinnerEffect';
import SpinnerImage from './SpinnerImage';

export const SpinnerExamples = (props) => {
  return (
    <StyledSpinnerExamples>
      <SpinnerFgcolor />
      <SpinnerSize />
      <SpinnerEffect />
      <SpinnerImage />
    </StyledSpinnerExamples>
  );
};

export default SpinnerExamples;
