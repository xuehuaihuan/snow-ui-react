import React from 'react';
import { Button } from '../../lib';
import ExamplesHeader from '../common/header';
import ExampleList from '../common/list';
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING,
  XXS, XS, SM, MD, LG, XL, XXL,
} from '../../lib/common/constant';
import { StyledButtonSize } from './styles/ButtonSize';

const ButtonSize = () => {
  return (
    <>
      <StyledButtonSize className='section-item'>
        <ExamplesHeader>
          button size - 按钮尺寸
        </ExamplesHeader>
        <ExampleList inline className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={XXS}
            >
              xxs - xx-small
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              size={XS}
            >
              xs - x-small
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              size={SM}
            >
              sm - small
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              size={MD}
            >
              md - medium
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              size={LG}
            >
              lg - large
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              size={XL}
            >
              xl - x-large
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              size={XXL}
            >
              xxl - xx-large
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonSize>
    </>
  );
};

export default ButtonSize;
