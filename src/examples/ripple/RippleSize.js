import React from 'react';
import { Ripple } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import {
  majorColor, minorColor, plainColor, successColor, infoColor, dangerColor, warningColor,
} from '../../lib/common/theme';
import {
  XXS, XS, SM, MD, LG, XL, XXL,
} from '../../lib/common/constant';
import { StyledRippleSize } from './styles/RippleSize';

const RippleSize = () => {
  return (
    <>
      <StyledRippleSize className='section-item'>
        <ExamplesHeader>
          ripple size - 涟漪尺寸
        </ExamplesHeader>
        <ExampleList
          inline
        >
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={majorColor}
                size={XXS}
              >
                <div className='gradient-image line-paper' />
              </Ripple>
              <figcaption style={{
                color: majorColor,
              }}
              >
                {XXS}
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={minorColor}
                size={XS}
              >
                <div className='gradient-image line-paper' />
              </Ripple>
              <figcaption style={{
                color: minorColor,
              }}
              >
                {XS}
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={plainColor}
                size={SM}
              >
                <div className='gradient-image carbon' />
              </Ripple>
              <figcaption style={{
                backgroundColor: '#000',
                color: plainColor,
              }}
              >
                {SM}
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={successColor}
                size={MD}
              >
                <div className='gradient-image line-paper' />
              </Ripple>
              <figcaption style={{
                color: successColor,
              }}
              >
                {MD}
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={infoColor}
                size={LG}
              >
                <div className='gradient-image line-paper' />
              </Ripple>
              <figcaption style={{
                color: infoColor,
              }}
              >
                {LG}
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={dangerColor}
                size={XL}
              >
                <div className='gradient-image line-paper' />
              </Ripple>
              <figcaption style={{
                color: dangerColor,
              }}
              >
                {XL}
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={warningColor}
                size={XXL}
              >
                <div className='gradient-image line-paper' />
              </Ripple>
              <figcaption style={{
                color: warningColor,
              }}
              >
                {XXL}
              </figcaption>
            </figure>
          </ExampleList.Item>
        </ExampleList>
      </StyledRippleSize>
    </>
  );
};

export default RippleSize;
