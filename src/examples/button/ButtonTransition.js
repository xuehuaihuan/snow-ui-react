import React from 'react'
import { Button } from '../../lib'
import ExamplesHeader from '../common/header'
import ExampleList from '../common/list'
import { StyledButtonTransition } from './styles/ButtonTransition'
import {
  MAJOR, MINOR,
  XXL
} from '../../lib/common/constant'

const ButtonTransition = () => {
  return (
    <>
      <StyledButtonTransition className='section-item'>
        <ExamplesHeader>
          button transition - 按钮过渡效果
        </ExamplesHeader>
        <ExampleList className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={XXL}
              block
              hasBorder
              inverse
              transition={false}
            >
              no transition
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              size={XXL}
              block
              hasBorder
              inverse
              transition={{
                property: 'color,background-color',
                duration: '1s,1s',
                timingFunction: 'ease-in-out',
                delay: '30ms'
              }}
            >
              custom transition
            </Button>
          </ExampleList.Item>
        </ExampleList>
      </StyledButtonTransition>
    </>
  )
}

export default ButtonTransition
