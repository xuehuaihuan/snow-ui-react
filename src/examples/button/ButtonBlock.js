import React from 'react'
import { Button } from '../../lib'
import ExamplesHeader from '../common/header'
import ExampleList from '../common/list'
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
  ROUNDED_RECT, CAPSULE, DIAMOND,
  XXL,
  DASHED, DOTTED, RIDGE, GROOVE
} from '../../lib/common/constant'
import { StyledButtonBlock } from './styles/ButtonBlock'

const ButtonBlock = () => {
  return (
    <>
      <StyledButtonBlock className='section-item'>
        <ExamplesHeader>
          block button  - 块级按钮
        </ExamplesHeader>
        <ExampleList className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={XXL}
              block
            >
              {MAJOR}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={ROUNDED_RECT}
              size={XXL}
              block
              hasHalfpxBorder
              inverse
              border={{
                style: DASHED
              }}
            >
              {MINOR}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              block
              size={XXL}
              shape={CAPSULE}
              hasBorder
            >
              {PLAIN}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={DIAMOND}
              size={XXL}
              block
            >
              {SUCCESS}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              size={XXL}
              block
              hasBorder
              border={{
                width: '5px',
                style: RIDGE
              }}
              inverse
            >
              {INFO}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              shape={ROUNDED_RECT}
              size={XXL}
              block
              hasHalfpxBorder
              border={{
                style: DOTTED
              }}
            >
              {DANGER}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              block
              size={XXL}
              shape={CAPSULE}
            >
              {WARNING}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              block
              size={XXL}
              shape={DIAMOND}
              hasBorder
              inverse
              border={{
                width: '3px',
                style: GROOVE,
                color: '#ffc300'
              }}
              bgcolor='#ffc300'
              fgcolor='#222'
              active={{
                borderColor: '#ff0036',
                bgcolor: '#ff0036',
                fgcolor: '#fff'
              }}
            >
              {CUSTOM}
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonBlock>
    </>
  )
}

export default ButtonBlock
