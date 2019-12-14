import React from 'react';
import { Button } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import { StyledButtonIcon } from './styles/ButtonIcon';
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
  ROUNDED_RECT, CAPSULE, SQUARE, ROUNDED_SQUARE, CIRCLE, DIAMOND,
  LG,
  DASHED,
} from '../../lib/common/constant';

const ButtonIcon = () => {
  return (
    <>
      <StyledButtonIcon className='section-item'>
        <ExamplesHeader>
          button icon - 按钮小图标
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={LG}
              icon={{
                src: require('../../assets/svg/icons/icon-cloud-download.svg'),
                fill: true,
              }}
            >
              require svg image
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              size={LG}
              shape={ROUNDED_RECT}
              icon={{
                src: require('../../assets/img/icons/icon-cloud-upload.png'),
              }}
            >
              png image not support changing skin
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              size={LG}
              shape={CAPSULE}
              icon={{
                src: require('../../assets/svg/icons/icon-download.svg'),
                fill: true,
              }}
              hasBorder
              inverse
            >
              hasBorder, inverse
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              size={LG}
              shape={SQUARE}
              icon={{
                src: require('../../assets/svg/icons/icon-upload.svg'),
                fill: true,
              }}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              size={LG}
              shape={ROUNDED_SQUARE}
              icon={{
                src: require('../../assets/svg/icons/icon-arrow-left-thin.svg'),
                fill: true,
              }}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              size={LG}
              shape={CIRCLE}
              icon={{
                src: require('../../assets/svg/icons/icon-arrow-right-thin.svg'),
                fill: true,
              }}
              hasBorder
              border={{
                style: DASHED,
              }}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              size={LG}
              shape={DIAMOND}
              icon={{
                src: require('../../assets/svg/icons/icon-search.svg'),
                stroke: true,
              }}
            >
              position: left
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              size={LG}
              shape='capsule'
              icon={{
                src: require('../../assets/svg/icons/icon-arrow-right.svg'),
                fill: true,
                position: 'right',
              }}
              fgcolor='#fff'
              bgcolor='#ff4200'
              active={{
                fgcolor: '#fff',
                bgcolor: '#ff0036',
              }}
            >
              position: right
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              image format other than SVG is not supported by skin changing function
              -
              换肤功能不支持svg以外的图像格式；
            </li>
            <li>
              most SVG images can change their colors by modifying the fill, stroke, and stopcolor attributes
              -
              多数svg图像修改fill、stroke、stopColor属性即可改变其颜色；
            </li>
          </ol>
        </div>
      </StyledButtonIcon>
    </>
  );
};

export default ButtonIcon;
