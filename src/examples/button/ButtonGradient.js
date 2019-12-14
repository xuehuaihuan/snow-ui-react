import React from 'react';
import { Button } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
  XXL,
  GRADIENT_LINEAR, GRADIENT_RADIAL,
  TO_TOP, TO_BOTTOM, TO_LEFT_TOP, TO_RIGHT_BOTTOM, TO_RIGHT_TOP, TO_LEFT_BOTTOM, TO_IN, TO_OUT,
} from '../../lib/common/constant';
import { StyledButtonGradient } from './styles/ButtonGradient';

const ButtonGradient = () => {
  return (
    <>
      <StyledButtonGradient className='section-item'>
        <ExamplesHeader>
          button gradient - 按钮渐变
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={XXL}
              gradient
              activeGradient
            >
              {GRADIENT_LINEAR} gradient
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              size={XXL}
              gradient={{
                type: GRADIENT_RADIAL,
              }}
              activeGradient={{
                type: GRADIENT_RADIAL,
              }}
            >
              {GRADIENT_RADIAL} gradient
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              size={XXL}
              gradient={{
                linearDirection: TO_TOP,
              }}
              activeGradient={{
                linearDirection: TO_BOTTOM,
              }}
            >
              {TO_TOP}, active: {TO_BOTTOM}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              size={XXL}
              gradient={{
                linearDirection: TO_LEFT_TOP,
              }}
              activeGradient={{
                linearDirection: TO_RIGHT_BOTTOM,
              }}
            >
              {TO_LEFT_TOP}, active: {TO_RIGHT_BOTTOM}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              size={XXL}
              gradient={{
                linearDirection: TO_RIGHT_TOP,
              }}
              activeGradient={{
                linearDirection: TO_LEFT_BOTTOM,
              }}
            >
              {TO_RIGHT_TOP}, active: {TO_LEFT_BOTTOM}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              size={XXL}
              gradient={{
                linearDirection: '45deg',
              }}
              activeGradient={{
                linearDirection: '225deg',
              }}
            >
              45deg, active: 225deg
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              size={XXL}
              gradient={{
                type: GRADIENT_RADIAL,
                linearDirection: '45deg',
              }}
              activeGradient={{
                type: GRADIENT_RADIAL,
                linearDirection: '225deg',
              }}
            >
              {GRADIENT_RADIAL}, gradient.linearDirection and activeGradient.linearDirection not work
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              size={XXL}
              fgcolor='#fff'
              active={{
                fgcolor: '#fff',
              }}
              gradient={{
                type: GRADIENT_RADIAL,
                startColor: '#ff8140',
                endColor: '#e91930',
              }}
              activeGradient={{
                type: GRADIENT_RADIAL,
                startColor: '#0084ff',
                endColor: '#43d480',
              }}
            >
              customize startColor, endColor, {TO_OUT}, active: {TO_IN}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              size={XXL}
              fgcolor='#fff'
              active={{
                fgcolor: '#fff',
              }}
              gradient={{
                type: GRADIENT_RADIAL,
                startColor: '#ff8140',
                endColor: '#e91930',
                radialDirection: TO_IN,
              }}
              activeGradient={{
                type: GRADIENT_RADIAL,
                startColor: '#0084ff',
                endColor: '#43d480',
                radialDirection: TO_OUT,
              }}
            >
              customize startColor, endColor, {TO_IN}, active: {TO_OUT}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              size={XXL}
              className='pyramid'
              fgcolor='#fff'
              style={{
                textShadow: '-1px -1px 0 #43d480, 1px -1px #43d480, -1px 1px 0 #43d480, 1px 1px 0 #43d480',
              }}
            >
              active style not work
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              className='tartan'
              skin={CUSTOM}
              size={XXL}
              fgcolor='#e91930'
              bgcolor='#ff8140'
              active={{
                fgcolor: '#ff8140',
                bgcolor: '#e91930',
              }}
              disabled
            >
              disabled gray style not work
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              background-image gradient not support css transition
              -
              背景图像渐变不支持css过渡；
            </li>
            <li>
              Only borderless button support background gradient
              -
              只有无边框按钮支持背景渐变；
            </li>
            <li>
              If you customized complex background gradient, active style, disabled gray style, will not work
              -
              如果你自定义了复杂背景渐变，ative样式、禁用置灰样式不会生效；
            </li>
          </ol>
        </div>
        <div className='tip-info'>
          <ol>
            <li>
              For background gradient, Button Component only provide simple configuration,
              and more complex needs to be implemented by yourself
              -
              关于背景渐变，组件只提供简单的配置，更复杂的需要你自己实现；
            </li>
          </ol>
        </div>
      </StyledButtonGradient>
    </>
  );
};

export default ButtonGradient;
