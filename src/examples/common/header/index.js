import React from 'react';
import StyledHeader from './styles';

const subtitle = (props) => {
  return (
    <p className='subtitle'>
      {props.subtitle}
    </p>
  );
};

const ExamplesHeader = (props) => {
  return (
    <StyledHeader>
      <h3 className='title'>
        {props.children}
      </h3>
      {props.subtitle ? subtitle(props) : ''}
    </StyledHeader>
  );
};

export default ExamplesHeader;
