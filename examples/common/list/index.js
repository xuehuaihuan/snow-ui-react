import React from 'react';
import {
  StyledList,
  StyledItem,
} from './styles';

const Item = (props) => {
  return React.createElement(StyledItem, props);
};

const ExampleList = (props) => {
  return React.createElement(StyledList, props);
};

ExampleList.Item = Item;

export default ExampleList;
