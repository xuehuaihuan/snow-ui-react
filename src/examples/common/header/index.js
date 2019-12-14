import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader from './styles';

const subtitle = (subtitle) => {
  return (
    <p className='subtitle'>
      {subtitle}
    </p>
  );
};

const ExamplesHeader = (props) => {
  return (
    <StyledHeader>
      <h3 className='title'>
        {props.children}
      </h3>
      {props.subtitle ? subtitle(props.subtitle) : ''}
    </StyledHeader>
  );
};

ExamplesHeader.defaultProps = {
  subtitle: 'subtitle',
};

ExamplesHeader.propTypes = {
  children: PropTypes.object,
  subtitle: PropTypes.string,
};

export default ExamplesHeader;
