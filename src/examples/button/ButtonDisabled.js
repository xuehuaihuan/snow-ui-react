import React from 'react';
import { Button } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
  DISABLED_OPACITY,
  RIPPLE,
} from '../../lib/common/constant';
import { StyledButtonDisabled } from './styles/ButtonDisabled';

const ButtonDisabled = () => {
  return (
    <>
      <StyledButtonDisabled className='section-item'>
        <ExamplesHeader
          subtitle='setting disabled style with gray - 使用置灰设置禁用样式'
        >
          button disabled - 按钮禁用
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              disabled
              onClick={(event) => { window.alert('disabled, prevent click'); }}
            >
              disabled, prevent click
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              disabled
              ifDisabledPreventClick={false}
              onClick={(event) => { window.alert('disabled, also can click. it\'s useful for alerting users'); }}
            >
              disabled, also can click. it's useful for alerting users
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              disabled
              hasBorder
            >
              hasBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              disabled
              hasHalfpxBorder
            >
              hasHalfpxBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              disabled
              hasBorder
            >
              hasBorder, inverse
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              disabled
              hasHalfpxBorder
            >
              hasHalfpxBorder, inverse
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              disabled
              icon={{
                src: require('../../assets/svg/icons/icon-arrow-right.svg'),
                fill: true,
                position: 'right',
              }}
            >
              icon
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              disabled
              effec={RIPPLE}
              hasBorder
            >
              {RIPPLE}
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonDisabled>
      <StyledButtonDisabled className='section-item'>
        <ExamplesHeader
          subtitle='setting disabled style with opacity - 使用不透明度设置禁用样式'
        >
          button disabled - 按钮禁用
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              disabled
              disabledType={DISABLED_OPACITY}
              onClick={(event) => { window.alert('disabled, prevent click'); }}
            >
              disabled, prevent click
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              disabled
              disabledType={DISABLED_OPACITY}
              ifDisabledPreventClick={false}
              onClick={(event) => { window.alert('disabled, also can click. it\'s useful for alerting users'); }}
            >
              disabled, also can click. it's useful for alerting users
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              disabled
              disabledType={DISABLED_OPACITY}
              hasBorder
            >
              hasBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              disabled
              disabledType={DISABLED_OPACITY}
              hasHalfpxBorder
            >
              hasHalfpxBorder
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              disabled
              disabledType={DISABLED_OPACITY}
              hasBorder
            >
              hasBorder, inverse
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              disabled
              disabledType={DISABLED_OPACITY}
              hasHalfpxBorder
            >
              hasHalfpxBorder, inverse
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              disabled
              disabledType={DISABLED_OPACITY}
              icon={{
                src: require('../../assets/svg/icons/icon-arrow-right.svg'),
                fill: true,
                position: 'right',
              }}
            >
              icon
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              disabled
              disabledType={DISABLED_OPACITY}
              effec={RIPPLE}
              hasBorder
            >
              {RIPPLE}
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonDisabled>
      <StyledButtonDisabled className='section-item'>
        <ExamplesHeader
          subtitle='setting disabled style opacity - 设置禁用样式不透明度'
        >
          button disabled - 按钮禁用
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              disabled
              disabledType={DISABLED_OPACITY}
              disabledOpacity={0.3}
            >
              disabledOpacity: 0.3
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              hasBorder
              disabled
              disabledType={DISABLED_OPACITY}
              disabledOpacity={0.6}
            >
              disabledOpacity: 0.6
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              hasHalfpxBorder
              disabled
              disabledType={DISABLED_OPACITY}
              disabledOpacity={0.9}
              inverse
            >
              disabledOpacity: 0.9
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonDisabled>
    </>
  );
};

export default ButtonDisabled;
