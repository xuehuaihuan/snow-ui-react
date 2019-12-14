import React from 'react';
import { Ripple } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import {
  majorColor, minorColor, plainColor, successColor, infoColor, dangerColor, warningColor,
} from '../../lib/common/theme';
import { StyledRippleCenterMode } from './styles/RippleCenterMode';

const RippleFgcolor = () => {
  return (
    <>
      <StyledRippleCenterMode className='section-item'>
        <ExamplesHeader>
          ripple center mode - 涟漪居中模式
        </ExamplesHeader>
        <ExampleList
          inline
        >
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={majorColor}
                centerMode
              >
                <div className='gradient-image cross-dots' />
              </Ripple>
              <figcaption style={{
                color: majorColor,
              }}
              >
                majorColor
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={minorColor}
                centerMode
              >
                <div className='gradient-image cross-dots' />
              </Ripple>
              <figcaption style={{
                color: minorColor,
              }}
              >
                minorColor
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={plainColor}
                centerMode
              >
                <div className='gradient-image carbon-fibre' />
              </Ripple>
              <figcaption style={{
                backgroundColor: '#000',
                color: plainColor,
              }}
              >
                plainColor
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={successColor}
                centerMode
              >
                <div className='gradient-image cross-dots' />
              </Ripple>
              <figcaption style={{
                color: successColor,
              }}
              >
                successColor
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={infoColor}
                centerMode
              >
                <div className='gradient-image cross-dots' />
              </Ripple>
              <figcaption style={{
                color: infoColor,
              }}
              >
                infoColor
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={dangerColor}
                centerMode
              >
                <div className='gradient-image cross-dots' />
              </Ripple>
              <figcaption style={{
                color: dangerColor,
              }}
              >
                dangerColor
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={warningColor}
                centerMode
              >
                <div className='gradient-image cross-dots' />
              </Ripple>
              <figcaption style={{
                color: warningColor,
              }}
              >
                warningColor
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor='#026873'
                centerMode
              >
                <div className='gradient-image cross-dots' />
              </Ripple>
              <figcaption style={{
                color: '#026873',
              }}
              >
                any color you want
              </figcaption>
            </figure>
          </ExampleList.Item>
        </ExampleList>
      </StyledRippleCenterMode>
    </>
  );
};

export default RippleFgcolor;
