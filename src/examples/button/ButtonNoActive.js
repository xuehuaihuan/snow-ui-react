import React from 'react'
import { Button } from '../../lib'
import ExamplesHeader from '../common/header'
import ExampleList from '../common/list'
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING,
  ROUNDED_RECT, CAPSULE, SQUARE, ROUNDED_SQUARE, CIRCLE, DIAMOND,
  XL,
  DASHED, DOTTED
} from '../../lib/common/constant'
import { StyledButtonNoActive } from './styles/ButtonNoActive'

const ButtonNoActive = () => {
  return (
    <>
      <StyledButtonNoActive className='section-item'>
        <ExamplesHeader>
          button no active/hover  - 按钮无active/hover效果
        </ExamplesHeader>
        <ExampleList inline>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              block
              size={XL}
              active={false}
            >
              {MAJOR}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={ROUNDED_RECT}
              size={XL}
              block
              hasBorder
              border={{
                style: DASHED
              }}
              active={false}
            >
              {MINOR}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              shape={CAPSULE}
              size={XL}
              block
              hasHalfpxBorder
              inverse
              active={false}
            >
              {SUCCESS}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={SQUARE}
              size={XL}
              block
              active={false}
            >
              {INFO}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              shape={ROUNDED_SQUARE}
              size={XL}
              block
              hasHalfpxBorder
              border={{
                style: DOTTED
              }}
              active={false}
            >
              {DANGER}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              shape={CIRCLE}
              size={XL}
              block
              hasBorder
              border={{
                style: DASHED
              }}
              active={false}
            >
              {WARNING}
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              size={XL}
              block
              shape={DIAMOND}
              hasHalfpxBorder
              inverse
              active={false}
            >
              {WARNING}
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonNoActive>
    </>
  )
}

export default ButtonNoActive
