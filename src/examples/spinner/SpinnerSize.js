import React from 'react'
import { Spinner } from '../../lib'
import ExamplesHeader from '../common/header'
import ExampleList from '../common/list'
import {
  XXS, XS, SM, MD, LG, XL, XXL, CUSTOM
} from '../../lib/common/constant'
import { StyledSpinnerSize } from './styles/SpinnerSize'
import {
  majorColor, minorColor, plainColor, successColor, infoColor, dangerColor, warningColor
} from '../../lib/common/theme'

const SpinnerSize = () => {
  return (
    <>
      <StyledSpinnerSize className='section-item'>
        <ExamplesHeader>
          spinner size - 旋转器尺寸
        </ExamplesHeader>
        <ExampleList
          inline
          className='spinner-list'
        >
          <ExampleList.Item>
            <Spinner
              fgcolor={majorColor}
              size={XXS}
            />
            <p className='subtitle color-major'>{XXS}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={minorColor}
              size={XS}
            />
            <p className='subtitle color-minor'>{XS}</p>
          </ExampleList.Item>
          <ExampleList.Item className='spinner-plain-container'>
            <Spinner
              fgcolor={plainColor}
              size={SM}
            />
            <p className='subtitle color-plain'>{SM}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={successColor}
              size={MD}
            />
            <p className='subtitle color-success'>{MD}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={infoColor}
              size={LG}
            />
            <p className='subtitle color-info'>{LG}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={dangerColor}
              size={XL}
            />
            <p className='subtitle color-danger'>{XL}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              fgcolor={warningColor}
              size={XXL}
            />
            <p className='subtitle color-warning'>{XXL}</p>
          </ExampleList.Item>
          <ExampleList.Item>
            <Spinner
              skin={CUSTOM}
              fgcolor='#0084ff'
              style={{ fontSize: '100px' }}
            />
            <p
              className='subtitle' style={{
                color: '#0084ff'
              }}
            >any size you want
            </p>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              to accommodate button components, only a few regular sizes are available
              -
              为了配合Button组件，只提供几个常规尺寸；
            </li>
            <li>
              you can modify the font size attribute to achieve any size you want by using the size attribute
              -
              可以修改font-size属性实现你想要的任何尺寸；
            </li>
          </ol>
        </div>
      </StyledSpinnerSize>
    </>
  )
}

export default SpinnerSize
