import React from 'react';
import { Button } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import { StyledButtonLoading } from './styles/ButtonLoading';
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING,
  ROUNDED_RECT, CAPSULE, DIAMOND, SQUARE, ROUNDED_SQUARE, CIRCLE,
  LG,
  DASHED,
  DISABLED_OPACITY,
} from '../../lib/common/constant';

const ButtonLoading = () => {
  return (
    <>
      <StyledButtonLoading className='section-item'>
        <ExamplesHeader>
          button loading gray - 按钮加载框置灰
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={LG}
              loading
              onClick={() => { window.alert('loading, prevent click'); }}
            >
              loading, prevent click
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              size={LG}
              shape={ROUNDED_RECT}
              loading={{
                effect: 'circle-scale-fade',
              }}
              hasBorder
            >
              hasBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              size={LG}
              shape={CAPSULE}
              loading={{
                effect: 'circle-line-fade',
              }}
              hasHalfpxBorder
              border={{
                style: DASHED,
              }}
            >
              hasHalfpxBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={SQUARE}
              size={LG}
              loading={{
                effect: 'line-bounce',
              }}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              size={LG}
              shape={ROUNDED_SQUARE}
              hasBorder
              loading={{
                effect: 'image',
                image: {
                  src: require('../../assets/svg/loading/wave-ball-bounce.svg'),
                  builtin: false,
                  fill: true,
                },
              }}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              size={LG}
              shape={CIRCLE}
              hasBorder
              border={{
                style: DASHED,
              }}
              loading={{
                effect: 'image',
                image: {
                  src: require('../../assets/svg/loading/messenge-typing.svg'),
                  builtin: false,
                  fill: true,
                },
              }}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              size={LG}
              shape={DIAMOND}
              loading={{
                effect: 'image',
                image: {
                  src: require('../../assets/svg/loading/multiple-balls-spin.svg'),
                  builtin: false,
                  fill: true,
                },
              }}
            >
              require svg image
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              loading status click event do not work
              -
              loading状态click事件不生效；
            </li>
          </ol>
        </div>
      </StyledButtonLoading>
      <StyledButtonLoading className='section-item'>
        <ExamplesHeader>
          button loading opacity - 按钮加载框不透明度
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={LG}
              loading
              disabledType={DISABLED_OPACITY}
              onClick={() => { window.alert('loading, prevent click'); }}
            >
              loading, prevent click
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              size={LG}
              shape={ROUNDED_RECT}
              loading={{
                effect: 'circle-scale-fade',
              }}
              disabledType={DISABLED_OPACITY}
              hasBorder
            >
              hasBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              size={LG}
              shape={CAPSULE}
              loading={{
                effect: 'circle-line-fade',
              }}
              disabledType={DISABLED_OPACITY}
              hasHalfpxBorder
              border={{
                style: DASHED,
              }}
            >
              hasHalfpxBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={SQUARE}
              size={LG}
              loading={{
                effect: 'line-bounce',
              }}
              disabledType={DISABLED_OPACITY}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              size={LG}
              shape={ROUNDED_SQUARE}
              hasBorder
              loading={{
                effect: 'image',
                image: {
                  src: require('../../assets/svg/loading/wave-ball-bounce.svg'),
                  builtin: false,
                  fill: true,
                },
              }}
              disabledType={DISABLED_OPACITY}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              size={LG}
              shape={CIRCLE}
              hasBorder
              border={{
                style: DASHED,
              }}
              loading={{
                effect: 'image',
                image: {
                  src: require('../../assets/svg/loading/messenge-typing.svg'),
                  builtin: false,
                  fill: true,
                },
              }}
              disabledType={DISABLED_OPACITY}
            />
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              size={LG}
              shape={DIAMOND}
              loading={{
                effect: 'image',
                image: {
                  src: require('../../assets/svg/loading/multiple-balls-spin.svg'),
                  builtin: false,
                  fill: true,
                },
              }}
              disabledType={DISABLED_OPACITY}
            >
              require svg image
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonLoading>
    </>
  );
};

export default ButtonLoading;
