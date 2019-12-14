import React from 'react'
import { Spinner } from '../../lib'
import ExamplesHeader from '../common/header'
import ExampleList from '../common/list'
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING
} from '../../lib/common/constant'
import { StyledSpinnerFgcolor } from './styles/SpinnerFgcolor'
import {
  majorColor, minorColor, plainColor, successColor, infoColor, dangerColor, warningColor
} from '../../lib/common/theme'

const SpinnerFgcolor = () => {
  return (
    <>
      <StyledSpinnerFgcolor className='section-item'>
        <ExamplesHeader>
          spinner skin - 旋转器皮肤
        </ExamplesHeader>
        <ExampleList
          inline
          className='spinner-list'
        >
          <ExampleList.Item>
            <Spinner
              fgcolor={majorColor}
            />
            <p className='subtitle color-major'>{MAJOR}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
            />
            <p className='subtitle color-minor'>{MINOR}</p>
          </ExampleList.Item>
          <ExampleList.Item className='spinner-plain-container'>
            <Spinner
              fgcolor={plainColor}
            />
            <p className='subtitle color-plain'>{PLAIN}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={successColor}
            />
            <p className='subtitle color-success'>{SUCCESS}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={infoColor}
            />
            <p className='subtitle color-info'>{INFO}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={dangerColor}
            />
            <p className='subtitle color-danger'>{DANGER}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              skin={WARNING}
              fgcolor={warningColor}
            />
            <p className='subtitle color-warning'>{WARNING}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor='#026873'
            />
            <p
              className='subtitle' style={{
                color: '#026873'
              }}
            >any color you want
            </p>
          </ExampleList.Item>
        </ExampleList>
      </StyledSpinnerFgcolor>
    </>
  )
}

export default SpinnerFgcolor
