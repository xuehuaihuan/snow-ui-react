import React from 'react';
import { StyledLineBounce } from '../styles';

const LineBounce = (props) => {
  return React.createElement(StyledLineBounce, props, [
    React.createElement('span', { key: '1' }),
    React.createElement('span', { key: '2' }),
    React.createElement('span', { key: '3' }),
    React.createElement('span', { key: '4' }),
    React.createElement('span', { key: '5' }),
  ]);
};

export default LineBounce;
