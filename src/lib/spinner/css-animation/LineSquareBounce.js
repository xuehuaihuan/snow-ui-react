import React from 'react';
import { StyledLineSquareBounce, StyledLineSquareBounceInner } from '../styles';

const LineSquareBounce = (props) => {
  return React.createElement(StyledLineSquareBounce, props, [
    React.createElement(StyledLineSquareBounceInner, { key: '1', ...props }),
    React.createElement(StyledLineSquareBounceInner, { key: '2', ...props }),
    React.createElement(StyledLineSquareBounceInner, { key: '3', ...props }),
    React.createElement(StyledLineSquareBounceInner, { key: '4', ...props }),
    React.createElement(StyledLineSquareBounceInner, { key: '5', ...props }),
  ]);
};

export default LineSquareBounce;
