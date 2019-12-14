import React from 'react';
import { StyledLineSquareBounce, StyledLineCircleBounceInner } from '../styles';

const LineBounce = (props) => {
  return React.createElement(StyledLineSquareBounce, props, [
    React.createElement(StyledLineCircleBounceInner, { key: '1', ...props }),
    React.createElement(StyledLineCircleBounceInner, { key: '2', ...props }),
    React.createElement(StyledLineCircleBounceInner, { key: '3', ...props }),
    React.createElement(StyledLineCircleBounceInner, { key: '4', ...props }),
    React.createElement(StyledLineCircleBounceInner, { key: '5', ...props }),
  ]);
};

export default LineBounce;
