import {
  GRADIENT_LINEAR,
  TO_RIGHT, TO_LEFT, TO_OUT, TO_IN,
  DIAMOND
} from '../../lib/common/constant'

/**
 * button border content class - 按钮边框内容类
 * @constant { String } BUTTON_BORDER_CONTENT_CLASS
 */
export const BUTTON_BORDER_CONTENT_CLASS = 'button-border-content'

/**
 * default skin style - 默认皮肤样式
 * @constant { Object } DEFAULT_SKIN_STYLE
 */
export const DEFAULT_SKIN_STYLE = {
  borderColor: '',
  bgcolor: '',
  fgcolor: '',
  halfpxBorderColor: ''
}

/**
 * default active skin style - 默认active皮肤样式
 * @constant { Object } DEFAULT_ACTIVE_SKIN_STYLE
 */
export const DEFAULT_ACTIVE_SKIN_STYLE = Object.assign({}, DEFAULT_SKIN_STYLE)

/**
 * default gradient - 默认渐变
 * @constant { Object } DEFAULT_GRADIENT
 */
export const DEFAULT_GRADIENT = {
  startColor: '',
  endColor: '',
  type: GRADIENT_LINEAR,
  linearDirection: TO_RIGHT,
  radialDirection: TO_OUT
}

/**
 * default active gradient - 默认active渐变
 * @constant { Object } DEFAULT_ACTIVE_GRADIENT
 */
const DEFAULT_ACTIVE_GRADIENT = Object.assign({}, DEFAULT_GRADIENT)
DEFAULT_ACTIVE_GRADIENT.linearDirection = TO_LEFT
DEFAULT_ACTIVE_GRADIENT.radialDirection = TO_IN
export { DEFAULT_ACTIVE_GRADIENT }

/**
 * button diamond content class - 按钮菱形内容类
 * @constant { Object } DEFAULT_ACTIVE_GRADIENT
 */
export const BUTTON_DIAMOND_CONTENT_CLASS = `button-${DIAMOND}-content`

export { RIPPLE_LIST_CLASS, RIPPLE_CLASS } from '../ripple/constant'
