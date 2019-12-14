import React from 'react'
import { Button } from '../../lib'
import ExamplesHeader from '../common/header'
import ExampleList from '../common/list'
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
  ROUNDED_RECT, DIAMOND, CAPSULE,
  RIPPLE,
  XXL,
  DASHED
} from '../../lib/common/constant'
import { StyledButtonRipple } from './styles/ButtonRipple'

const ButtonRipple = () => {
  return (
    <>
      <StyledButtonRipple className='section-item'>
        <ExamplesHeader>
          button ripple effect - 按钮涟漪效果
        </ExamplesHeader>
        <ExampleList inline className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              effect={RIPPLE}
              size={XXL}
            >
              ripple start anywhere you clicked
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={ROUNDED_RECT}
              effect={RIPPLE}
              size={XXL}
            >
              ripple start anywhere you clicked
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              shape={CAPSULE}
              effect={RIPPLE}
              size={XXL}
              hasBorder
            >
              ripple start anywhere you clicked
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={DIAMOND}
              effect={RIPPLE}
              size={XXL}
              hasHalfpxBorder
              ripple={{
                centerMode: true
              }}
            >
              ripple start always center
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              effect={RIPPLE}
              size={XXL}
              hasBorder
              inverse
            >
              ripple start always center
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              shape={DIAMOND}
              effect={RIPPLE}
              size={XXL}
              hasHalfpxBorder
              inverse
              ripple={{
                centerMode: true
              }}
            >
              ripple start always center
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              shape={CAPSULE}
              effect={RIPPLE}
              size={XXL}
              hasHalfpxBorder
              border={{
                style: DASHED
              }}
              ripple={{
                fgcolor: '#0084ff'
              }}
            >
              customize ripple color
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              effect={RIPPLE}
              size={XXL}
              fgcolor='#fff'
              bgcolor='#ff8140'
              ripple={{
                centerMode: true,
                fgcolor: '#43d480'
              }}
            >
              customize ripple color
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonRipple>
    </>
  )
}

export default ButtonRipple
