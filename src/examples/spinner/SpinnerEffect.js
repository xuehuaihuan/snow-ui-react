import React from 'react';
import { Spinner } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import { StyledSpinnerEffect } from './styles/SpinnerEffect';
import {
  majorColor, minorColor, plainColor, successColor, infoColor, dangerColor, warningColor,
} from '../../lib/common/theme';

const SpinnerEffect = () => {
  return (
    <>
      <StyledSpinnerEffect className='section-item'>
        <ExamplesHeader>
          spinner pure CSS animation effect - 旋转器纯CSS动画效果
        </ExamplesHeader>
        <ExampleList
          inline
          className='spinner-list'
        >
          <ExampleList.Item>
            <Spinner
              fgcolor={majorColor}
            />
            <p className='subtitle color-major'> defalut: snake rotate - 默认：蛇形旋转</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
              effect='circle-fade'
            />
            <p className='subtitle color-minor'>circle fade - 圆淡化</p>
          </ExampleList.Item>
          <ExampleList.Item className='spinner-plain-container'>
            <Spinner
              fgcolor={plainColor}
              effect='circle-line-fade'
            />
            <p className='subtitle color-plain'>circle line fade - 圆线淡化</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={successColor}
              effect='circle-scale-fade'
            />
            <p className='subtitle color-success'>circle scale fade - 圆缩放淡化</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={infoColor}
              effect='line-bounce'
            />
            <p className='subtitle color-info'>line bounce - 直线跳动</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={dangerColor}
              effect='line-square-bounce'
            />
            <p className='subtitle color-danger'>line square bounce - 直线方形跳动</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={warningColor}
              effect='line-circle-bounce'
            />
            <p className='subtitle color-warning'>line circle bounce - 直线圆形跳动</p>
          </ExampleList.Item>
        </ExampleList>
      </StyledSpinnerEffect>
    </>
  );
};

export default SpinnerEffect;
