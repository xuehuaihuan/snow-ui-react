import React from 'react'
import { Button } from '../../lib'
import ExamplesHeader from '../common/header'
import ExampleList from '../common/list'
import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
  RECT, ROUNDED_RECT, CAPSULE, SQUARE, ROUNDED_SQUARE, CIRCLE, DIAMOND,
  DOTTED, DASHED, DOUBLE, GROOVE, RIDGE, INSET, OUTSET, SOLID,
  LG,
  BORDER_BOX
} from '../../lib/common/constant'
import { StyledButtonBorder } from './styles/ButtonBorder'

const ButtonBorder = () => {
  return (
    <>
      <StyledButtonBorder className='section-item'>
        <ExamplesHeader
          subtitle='
          mouse hover or active, bgcolor comes from the text color lightening
          -
          鼠标hover、active，背景色源于变亮的前景色
        '
        >
          button border - 按钮边框
        </ExamplesHeader>
        <ExampleList inline className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={LG}
              hasBorder
              boxSizing={BORDER_BOX}
            >
            1px {SOLID} majorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={ROUNDED_RECT}
              size={LG}
              hasBorder
              boxSizing={BORDER_BOX}
              border={{
                style: DOTTED
              }}
            >
            1px {DOTTED} minorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              shape={CAPSULE}
              size={LG}
              hasBorder
              border={{
                width: '1px',
                style: DASHED
              }}
              boxSizing={BORDER_BOX}
            >
            1px {DASHED} plainColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={SQUARE}
              size={LG}
              hasBorder
              border={{
                style: DOTTED
              }}
              boxSizing={BORDER_BOX}
            >
            1px {DOTTED} successColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              shape={ROUNDED_SQUARE}
              size={LG}
              hasBorder
              border={{
                style: DASHED
              }}
              boxSizing={BORDER_BOX}
            >
            1px {DASHED} infoColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              shape={CIRCLE}
              size={LG}
              hasBorder
              boxSizing={BORDER_BOX}
            >
            1px {SOLID} dangerColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              shape={DIAMOND}
              size={LG}
              hasBorder
              border={{
                width: '5px',
                style: GROOVE
              }}
              boxSizing={BORDER_BOX}
            >
            5px {GROOVE} warningColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={RECT}
              size={LG}
              hasBorder
              boxSizing={BORDER_BOX}
              bgcolor='#fff'
              fgcolor='#00b51d'
              border={{
                width: '3px',
                style: INSET,
                color: '#00b51d'
              }}
              active={{
                fgcolor: '#fff',
                bgcolor: '#ec414d',
                borderColor: '#ec414d'
              }}
            >
            3px {OUTSET} custom-color
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={ROUNDED_RECT}
              size={LG}
              hasBorder
              inverse
              fgcolor='#4fc08d'
              bgcolor='#fff'
              border={{
                width: '3px',
                style: DOUBLE,
                color: '#4fc08d'
              }}
              active={{
                fgcolor: '#61dafb',
                bgcolor: '#20232a',
                borderColor: '#0ff'
              }}
            >
            break reverse bgcolor - 破坏反转背景色
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              shape={CAPSULE}
              size={LG}
              hasBorder
              inverse
            >
            setting {MAJOR} border.color is invalid
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              Only the active style of the button with skin='custom' can be set. Other settings are invalid
              -
              只有skin='custom'的按钮的active样式可以设置，其他的设置无效；
            </li>
            <li>
              The meaning of boxSizing property is different from that of box-sizing in CSS, but the performance is the same
              -
              boxSizing属性与css的box-sizing含义不同，但表现相同；
            </li>
          </ol>
        </div>
      </StyledButtonBorder>
      <StyledButtonBorder className='section-item'>
        <ExamplesHeader
          subtitle='invert bgcolor to text color - 反转背景色为前景色'
        >
          button border - 按钮边框
        </ExamplesHeader>
        <ExampleList inline className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={LG}
              hasBorder
              inverse
            >
            1px {SOLID} majorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={ROUNDED_RECT}
              size={LG}
              hasBorder
              border={{
                style: DASHED
              }}
              inverse
            >
            3px {DASHED} minorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              shape={CAPSULE}
              size={LG}
              hasBorder
              border={{
                width: '1px',
                style: DOTTED
              }}
              inverse
            >
            1px {DOTTED} plainColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={SQUARE}
              size={LG}
              hasBorder
              inverse
            >
            1px solid successColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              shape={ROUNDED_SQUARE}
              size={LG}
              hasBorder
              border={{
                width: '1px',
                style: DOTTED
              }}
              inverse
            >
            1px {DOTTED} infoColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              shape={CIRCLE}
              size={LG}
              hasBorder
              border={{
                style: DASHED
              }}
              inverse
            >
            1px {DASHED} dangerColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              shape={DIAMOND}
              size={LG}
              hasBorder
              border={{
                width: '5px',
                style: RIDGE
              }}
              inverse
            >
            5px {RIDGE} warningColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={RECT}
              size={LG}
              hasBorder
              inverse
              bgcolor='#fff'
              fgcolor='#ec414d'
              border={{
                width: '3px',
                style: OUTSET,
                color: '#ec414d'
              }}
              active={{
                borderColor: '#00b51d',
                bgcolor: '#00b51d',
                fgcolor: '#fff'
              }}
            >
            3px {INSET} custom-color
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={ROUNDED_RECT}
              size={LG}
              hasBorder
              inverse
              fgcolor='#61dafb'
              bgcolor='#fff'
              border={{
                width: '3px',
                style: DOUBLE,
                color: '#61dafb'
              }}
              active={{
                fgcolor: '#fff',
                bgcolor: '#4fc08d',
                borderColor: '#4fc08d'
              }}
            >
            break reverse bgcolor - 破坏反转背景色
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={CAPSULE}
              size={LG}
              hasBorder
              inverse
            >
            setting {MINOR} border.color is invalid
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              skin='custom' may break reverse bgcolor - skin='custom'可能会破坏反转背景色；
            </li>
            <li>
              Only the border.color of the button with skin='custom' can be set. Other settings are invalid
              -
              只有skin='custom'的按钮的边框颜色可以设置，其他的设置无效；
            </li>
          </ol>

        </div>
      </StyledButtonBorder>
      <StyledButtonBorder className='section-item'>
        <ExamplesHeader
          subtitle='
          mouse hover or active, bgcolor comes from the text color lightening
          -
          鼠标hover、active，背景色源于变亮的前景色
        '
        >
          button half px border - 按钮0.5像素边框
        </ExamplesHeader>
        <ExampleList inline className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DASHED
              }}
            >
            0.5px {DASHED} majorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={ROUNDED_RECT}
              size={LG}
              hasHalfpxBorder
            >
            0.5px {SOLID} minorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              shape={CAPSULE}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DOTTED
              }}
            >
            0.5px {DOTTED} plainColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={SQUARE}
              size={LG}
              hasHalfpxBorder
            >
            0.5px {SOLID} successColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              shape={ROUNDED_SQUARE}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DOTTED
              }}
            >
            0.5px {DOTTED} infoColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              shape={CIRCLE}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DASHED
              }}
            >
            0.5px {DASHED} dangerColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              shape={DIAMOND}
              size={LG}
              hasHalfpxBorder
              border={{
                style: RIDGE
              }}
            >
            0.5px {RIDGE} warningColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={RECT}
              size={LG}
              hasHalfpxBorder
              bgcolor='#fff'
              fgcolor='#00b51d'
              border={{
                style: INSET,
                color: '#00b51d'
              }}
              active={{
                fgcolor: '#fff',
                bgcolor: '#ec414d',
                borderColor: '#ec414d'
              }}
            >
            0.5px {INSET} custom-color
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={ROUNDED_RECT}
              size={LG}
              hasHalfpxBorder
              fgcolor='#4fc08d'
              bgcolor='#fff'
              border={{
                width: '3px',
                style: DOUBLE,
                color: '#4fc08d'
              }}
              active={{
                fgcolor: '#61dafb',
                bgcolor: '#20232a',
                borderColor: '#0ff'
              }}
            >
            0.5px double custom-color, setting border.width is invalid
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              If set hasHalfpxBorder to true, hasBorder does not work
              -
              如果设置hasHalfpxBorder为true，hasBorder不生效；
            </li>
            <li>The setting of halfpx border border.width is invalid - 设置0.5像素边框border.width是无效的。</li>
          </ol>
        </div>
      </StyledButtonBorder>
      <StyledButtonBorder className='section-item'>
        <ExamplesHeader
          subtitle='invert bgcolor to text color - 反转背景色为前景色'
        >
          button half px border - 按钮0.5像素边框
        </ExamplesHeader>
        <ExampleList inline className='button-list'>
          <ExampleList.Item>
            <Button
              skin={MAJOR}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DOTTED
              }}
              inverse
            >
            0.5px {DOTTED} majorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={MINOR}
              shape={ROUNDED_RECT}
              size={LG}
              hasHalfpxBorder
              inverse
            >
            0.5px {SOLID} minorColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={PLAIN}
              shape={CAPSULE}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DASHED
              }}
              inverse
            >
            0.5px {DASHED} plainColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={SUCCESS}
              shape={SQUARE}
              size={LG}
              hasHalfpxBorder
              inverse
            >
            0.5px {SOLID} successColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={INFO}
              shape={ROUNDED_SQUARE}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DASHED
              }}
              inverse
            >
            0.5px {DASHED} infoColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={DANGER}
              shape={CIRCLE}
              size={LG}
              hasHalfpxBorder
              border={{
                style: DOTTED
              }}
              inverse
            >
            0.5px {DOTTED} dangerColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={WARNING}
              shape={DIAMOND}
              size={LG}
              hasHalfpxBorder
              border={{
                style: GROOVE
              }}
              inverse
            >
            0.5px {GROOVE} warningColor
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={RECT}
              size={LG}
              hasHalfpxBorder
              bgcolor='#fff'
              fgcolor='#ec414d'
              border={{
                style: OUTSET,
                color: '#ec414d'
              }}
              inverse
              active={{
                borderColor: '#00b51d',
                bgcolor: '#00b51d',
                fgcolor: '#fff'
              }}
            >
            0.5px {OUTSET} custom-color
            </Button>
          </ExampleList.Item>
          <ExampleList.Item>
            <Button
              skin={CUSTOM}
              shape={ROUNDED_RECT}
              size={LG}
              hasHalfpxBorder
              inverse
              fgcolor='#61dafb'
              bgcolor='#fff'
              border={{
                width: '3px',
                style: DOUBLE,
                color: '#61dafb'
              }}
              active={{
                fgcolor: '#fff',
                bgcolor: '#4fc08d',
                borderColor: '#4fc08d'
              }}
            >
            0.5px dotted custom-color, setting border.width is invalid
            </Button>
          </ExampleList.Item>
        </ExampleList>
        <div className='tip-warning'>
          <ol>
            <li>
              skin='custom' can customize border style except border.width
              -
              skin='custom'可以自定义除了border.width之外的边框样式；
            </li>
            <li>
              Only the border.color of the button with skin='custom' can be set. Other settings are invalid
              -
              只有skin='custom'的按钮的边框颜色可以设置，其他的设置无效；
            </li>
          </ol>
        </div>
      </StyledButtonBorder>
    </>
  )
}

export default ButtonBorder
