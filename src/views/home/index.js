import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledHome from './styles';
import { Flex } from '../../lib/flex';
import { FlexItem } from '../../lib/flex-item';

const list = [
  {
    title: 'Button（按钮）',
    id: 'button',
    path: '/button',
  },
  {
    title: 'Ripple（涟漪）',
    id: 'ripple',
    path: '/ripple',
  },
  {
    title: 'Spinner（旋转器）',
    id: 'spinner',
    path: '/spinner',
  },
];

class Home extends Component {
  constructor () {
    super();
    this.list = list;
  }

  render () {
    return (
      <StyledHome>
        {
          this.list.map((item, index) => {
            return (
              <Flex
                key={item.id}
                onClick={() => this.handleClickItem(item)}
                className={index === 0 ? '' : 'halfpx-border border-top'}
              >
                <FlexItem flex={1}>
                  <h4>{item.title}</h4>
                </FlexItem>
                <FlexItem>
                  <p>
                    <i className='iconfont iconfont-arrow-right' />
                  </p>
                </FlexItem>
              </Flex>
            );
          })
        }
      </StyledHome>
    );
  }

  handleClickItem = (item) => {
    this.props.history.push(item.path);
  }
};

Home.defaultProps = {};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
