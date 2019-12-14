import React from 'react';
import { Button } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
} from '../../lib/common/constant';
import { StyledButtonSkin } from './styles/ButtonSkin';

const ButtonSkin = () => {
  return (
    <>
      <StyledButtonSkin className='section-item'>
        <ExamplesHeader>
          button skin - 按钮皮肤
        </ExamplesHeader>
        <ExampleList inline className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
            >
              {MAJOR}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
            >
              {MINOR}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
            >
              {PLAIN}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
            >
              {SUCCESS}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
            >
              {INFO}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
            >
              {DANGER}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
            >
              {WARNING}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
            >
              {CUSTOM}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              fgcolor='#fff'
              bgcolor='#ff8140'
              active={{
                fgcolor: '#eee',
                bgcolor: '#e91930',
              }}
            >
              customize active
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              fgcolor='#ffcf00'
              bgcolor='#0084ff'
              active={{
                fgcolor: '#fff',
                bgcolor: '#43d480',
              }}
              border={{
                width: '3px',
                style: 'solid',
                color: '#f00',
              }}
            >
              skin = {CUSTOM}, setting border is invalid
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              inverse
            >
               not support invert bgcolor(background color) to fgcolor(foreground color)
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              inverse
              fgcolor='#fff'
              bgcolor='#ff4200'
              active={{
                fgcolor: '#fff',
                bgcolor: '#ff0036',
              }}
            >
              skin!=='custom', bgcolor, fgcolor, active.bgcolor, or active.fgcolor can not be set
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              If hasHalfpxBorder and hasBorder are false, setting border is invalid
              -
              如果hasHalfpxBorder和hasBorder都为false，设置border是无效的；
            </li>
            <li>
              If hasBorder and hasHalfpxBorder are false, setting active.borderColor is invalid
              -
              如果hasBorder和hasHalfpxBorder都为false，设置active.borderColor是无效的；
            </li>
            <li>
              Only the bgcolor, fgcolor, active.bgcolor, and active.fgcolor of the button with skin='custom' can be set.
              Other settings are invalid
              -
              只有skin='custom'的按钮的背景色、前景色、active背景色和active前景色可以设置，其他的设置无效；
            </li>
            <li>
              Borderless button does not support invert bgcolor(background color) to fgcolor(foreground color)
              -
              无边框按钮不支持反转背景色为前景色；
            </li>
          </ol>
        </div>
        <div className='tip-info'>
          <ol>
            <li>
              The fgcolor(foreground color) includes SVG small icons, text and other colors
              -
              前景色包括svg小图标、文本等颜色；
            </li>
          </ol>
        </div>
      </StyledButtonSkin>
    </>
  );
};

export default ButtonSkin;
