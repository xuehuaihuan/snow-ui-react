import {
  RECT, ROUNDED_RECT, CAPSULE, SQUARE, ROUNDED_SQUARE, CIRCLE, DIAMOND,
  TOP, TOP_LEFT, TOP_RIGHT, RIGHT, BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT,
  UNDEFINED,
  NUMBER_ZERO, STRING_EMPTY,
  BORDER_BOX, PADDING_BOX
} from '../../common/constant'
import { hasOwnBorder } from './border'
import { BUTTON_DIAMOND_CONTENT_CLASS, RIPPLE_CLASS, RIPPLE_LIST_CLASS } from '../constant'

/**
 * get shape - 获取形状样式
 * @param  { String }   shape
 * @param  { Boolean }  hasHalfpxBorder
 * @param  { Boolean }  hasBorder
 * @param  { String }   boxSizing
 * @param  { String }   borderRadiusPosition
 * @return { String }   as follows: - 如下：
 */
const shapes = [RECT, ROUNDED_RECT, CAPSULE, SQUARE, ROUNDED_SQUARE, CIRCLE, DIAMOND]
const DEFAULT_ROUNDED = 0.36
const DEFAULT_CAPSULE = 3
const DEFAULT_CIRCLE = 9600000
const DEFAULT_DIAMOND = 36
const UNIT = 'em'
const RATIO = 2
export const getShape = (shape, hasHalfpxBorder, hasBorder, boxSizing, borderRadiusPosition) => {
  let bgclip
  let borderRadiusTop
  let borderRadiusTopLeft
  let borderRadiusTopRight
  let borderRadiusRight
  let borderRadiusBottom
  let borderRadiusBottomLeft
  let borderRadiusBottomRight
  let borderRadiusLeft
  // borderRadiusAll = NUMBER_ZERO
  // overwrite user agent default value - 覆盖用户代理默认值
  let borderRadiusAll
  let diamondRule = STRING_EMPTY

  shape = shapes.includes(shape) ? shape : RECT

  switch (shape) {
    case ROUNDED_RECT:
    case ROUNDED_SQUARE:
      bgclip = hasOwnBorder(hasBorder, boxSizing) ? PADDING_BOX : BORDER_BOX

      switch (borderRadiusPosition) {
        case TOP:
          borderRadiusTop = DEFAULT_ROUNDED
          break
        case TOP_LEFT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusTopLeft = DEFAULT_ROUNDED
          break
        case TOP_RIGHT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusTopRight = DEFAULT_ROUNDED
          break
        case RIGHT:
          borderRadiusRight = DEFAULT_ROUNDED
          break
        case BOTTOM:
          borderRadiusBottom = DEFAULT_ROUNDED
          break
        case BOTTOM_LEFT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusBottomLeft = DEFAULT_ROUNDED
          break
        case BOTTOM_RIGHT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusBottomRight = DEFAULT_ROUNDED
          break
        case LEFT:
          borderRadiusLeft = DEFAULT_ROUNDED
          break
        default:
          borderRadiusAll = DEFAULT_ROUNDED
          break
      }

      break
    case CAPSULE:
      bgclip = hasOwnBorder(hasBorder, boxSizing) ? PADDING_BOX : BORDER_BOX

      switch (borderRadiusPosition) {
        case TOP:
          borderRadiusTop = DEFAULT_CAPSULE
          break
        case TOP_LEFT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusTopLeft = DEFAULT_CAPSULE
          break
        case TOP_RIGHT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusTopRight = DEFAULT_CAPSULE
          break
        case RIGHT:
          borderRadiusRight = DEFAULT_CAPSULE
          break
        case BOTTOM:
          borderRadiusBottom = DEFAULT_CAPSULE
          break
        case BOTTOM_LEFT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusBottomLeft = DEFAULT_CAPSULE
          break
        case BOTTOM_RIGHT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusBottomRight = DEFAULT_CAPSULE
          break
        case LEFT:
          borderRadiusLeft = DEFAULT_CAPSULE
          break
        default:
          borderRadiusAll = DEFAULT_CAPSULE
          break
      }

      break
    case CIRCLE:
      bgclip = hasOwnBorder(hasBorder, boxSizing) ? PADDING_BOX : BORDER_BOX

      switch (borderRadiusPosition) {
        case TOP:
          borderRadiusTop = DEFAULT_CIRCLE
          break
        case TOP_LEFT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusTopLeft = DEFAULT_CIRCLE
          break
        case TOP_RIGHT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusTopRight = DEFAULT_CIRCLE
          break
        case RIGHT:
          borderRadiusRight = DEFAULT_CIRCLE
          break
        case BOTTOM:
          borderRadiusBottom = DEFAULT_CIRCLE
          break
        case BOTTOM_LEFT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusBottomLeft = DEFAULT_CIRCLE
          break
        case BOTTOM_RIGHT:
          borderRadiusAll = NUMBER_ZERO
          borderRadiusBottomRight = DEFAULT_CIRCLE
          break
        case LEFT:
          borderRadiusLeft = DEFAULT_CIRCLE
          break
        default:
          borderRadiusAll = DEFAULT_CIRCLE
          break
      }

      break
    case DIAMOND:
      bgclip = BORDER_BOX
      borderRadiusAll = NUMBER_ZERO
      diamondRule = `
        transform: skew(-${DEFAULT_DIAMOND}deg, 0);
        .${BUTTON_DIAMOND_CONTENT_CLASS} {
          display: inline-block;
        }
        .${BUTTON_DIAMOND_CONTENT_CLASS},
        .${RIPPLE_LIST_CLASS} {
          transform: skew(${DEFAULT_DIAMOND}deg, 0);
        }
        .${RIPPLE_CLASS} {
          overflow: hidden;
          .${RIPPLE_LIST_CLASS} {
            overflow: visible;
          }
        }
      `

      break
    case SQUARE:
    case RECT:
    default:
      bgclip = BORDER_BOX
      borderRadiusAll = NUMBER_ZERO

      break
  }

  const borderRadiusRule = `
    ${borderRadiusAll === UNDEFINED ? STRING_EMPTY : `border-radius: ${borderRadiusAll}${UNIT};`}
    ${borderRadiusTop ? `border-radius: ${borderRadiusTop}${UNIT} ${borderRadiusTop}${UNIT} 0 0;` : STRING_EMPTY}
    ${borderRadiusTopLeft ? `border-top-left-radius: ${borderRadiusTopLeft}${UNIT};` : STRING_EMPTY}
    ${borderRadiusTopRight ? `border-top-right-radius: ${borderRadiusTopRight}${UNIT};` : STRING_EMPTY}
    ${borderRadiusRight ? `border-radius: 0 ${borderRadiusRight}${UNIT} ${borderRadiusRight}${UNIT} 0;` : STRING_EMPTY}
    ${borderRadiusBottom ? `border-radius: 0 0 ${borderRadiusBottom}${UNIT} ${borderRadiusBottom}${UNIT};` : STRING_EMPTY}
    ${borderRadiusBottomLeft ? `border-bottom-left-radius: ${borderRadiusBottomLeft}${UNIT};` : STRING_EMPTY}
    ${borderRadiusBottomRight ? `border-bottom-right-radius: ${borderRadiusBottomRight}${UNIT};` : STRING_EMPTY}
    ${borderRadiusLeft ? `border-radius: ${borderRadiusLeft}${UNIT} 0 0 ${borderRadiusLeft}${UNIT};` : STRING_EMPTY}
  `

  const halfpxBorderRadiusRule = `
    ${borderRadiusAll === UNDEFINED ? STRING_EMPTY : `border-radius: ${borderRadiusAll * RATIO}${UNIT};`}
    ${borderRadiusTop ? `border-radius: ${borderRadiusTop * RATIO}${UNIT} ${borderRadiusTop * RATIO}${UNIT} 0 0;` : STRING_EMPTY}
    ${borderRadiusTopLeft ? `border-top-left-radius: ${borderRadiusTopLeft * RATIO}${UNIT};` : STRING_EMPTY}
    ${borderRadiusTopRight ? `border-top-right-radius: ${borderRadiusTopRight * RATIO}${UNIT};` : STRING_EMPTY}
    ${borderRadiusRight ? `border-radius: 0 ${borderRadiusRight * RATIO}${UNIT} ${borderRadiusRight * RATIO}${UNIT} 0;` : STRING_EMPTY}
    ${borderRadiusBottom ? `border-radius: 0 0 ${borderRadiusBottom * RATIO}${UNIT} ${borderRadiusBottom * RATIO}${UNIT};` : STRING_EMPTY}
    ${borderRadiusBottomLeft ? `border-bottom-left-radius: ${borderRadiusBottomLeft * RATIO}${UNIT};` : STRING_EMPTY}
    ${borderRadiusBottomRight ? `border-bottom-right-radius: ${borderRadiusBottomRight * RATIO}${UNIT};` : STRING_EMPTY}
    ${borderRadiusLeft ? `border-radius: ${borderRadiusLeft * RATIO}${UNIT} 0 0 ${borderRadiusLeft * RATIO}${UNIT};` : STRING_EMPTY}
  `

  return `
    ${bgclip ? `background-clip: ${bgclip}` : STRING_EMPTY}
    ${borderRadiusRule}
    ${
      hasHalfpxBorder ? `&::before {
        ${halfpxBorderRadiusRule}
      }` : STRING_EMPTY
    }
    ${
      !hasHalfpxBorder && boxSizing === BORDER_BOX ? `&::before {
        ${borderRadiusRule}
      }` : STRING_EMPTY
    }
    ${diamondRule}
    .${RIPPLE_CLASS} {
      overflow: hidden;
      &,
      .${RIPPLE_LIST_CLASS} {
        ${borderRadiusRule}
      }
    }
  `
}
