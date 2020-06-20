import React, { ReactElement } from 'react';
import { Ripple } from 'xue-ui-react';

import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import {
  majorColor, minorColor, plainColor, successColor, infoColor, dangerColor, warningColor,
} from '@/common/theme';
import { StyledRippleFgcolor } from './styles/RippleFgcolor';

const RippleFgcolor = (): ReactElement => {
  return (
    <>
      <StyledRippleFgcolor className='section-item'>
        <ExamplesHeader>
          ripple fgcolor - 涟漪前景色
        </ExamplesHeader>
        <ExampleList
          inline
        >
          <ExampleList.Item>
            <figure>
              <Ripple
                fgcolor={majorColor}
              >
                <div className='gradient-image seigaiha' />
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
              >
                <div className='gradient-image seigaiha' />
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
              >
                <div className='gradient-image starry-night' />
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
              >
                <div className='gradient-image seigaiha' />
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
              >
                <div className='gradient-image seigaiha' />
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
              >
                <div className='gradient-image seigaiha' />
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
              >
                <div className='gradient-image seigaiha' />
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
              >
                <div className='gradient-image seigaiha' />
              </Ripple>
              <figcaption style={{
                color: '#026873',
              }}
              >
                any color you want
              </figcaption>
            </figure>
          </ExampleList.Item>
          <ExampleList.Item style={{
            color: '#b71',
          }}
          >
            <figure>
              <Ripple>
                <div className='gradient-image honey-comb' />
              </Ripple>
              <figcaption>
                use inherited color
              </figcaption>
            </figure>
          </ExampleList.Item>
        </ExampleList>
      </StyledRippleFgcolor>
    </>
  );
};

export default RippleFgcolor;
