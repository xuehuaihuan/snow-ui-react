import {
  PLAIN,
  RECT,
  SM,
  DISABLED_OPACITY_VALUE, DISABLED_GRAY,
  CONTENT_BOX
} from '../common/constant'

export const defaultProps = {
  /**
   * hover/active style - hover/active样式
   * @property { Object | false } active
   * true: use defautl active style - 使用默认active样式
   * false: not use active style - 不用active样式
   * Object: set active style,
   * @warning only skin='custom' will take effect - 对象：设置active样式，只有skin='custom'才生效
   *   @property { String } borderColor 边框颜色
   *   @property { String } bgcolor     背景颜色
   *   @property { String } fgcolor     前景颜色
   * @example
   * active: {
   *   borderColor: '#f00',
   *   bgcolor: '#0f0',
   *   fgcolor: '#00f'
   * }
   */
  active: true,
  /**
   * background color - 背景色
   * @property { String } bgcolor
   */
  bgcolor: '',
  /**
   * block - 是否为块级
   * @property { Boolean } block true | false
   */
  block: false,
  /**
   * border - 边框样式
   * @property { Object } border
   *   @property { String } width     边框宽度
   *   @property { String } style     边框装饰
   *   @property { String } color     边框颜色
   * @example
   * border: {
   *   width: '3px',
   *   style: 'groove',
   *   color: '#00f'
   * }
   */
  border: {},
  /**
   * borderRadiusPosition - 圆角位置
   * @property { String } disabledType top | top-left | top-right | right | bottom | bottom-left | bottom-right | left
   * @warning only if the value of shape is rounded-rect, capsule, rounded-square, or circle, it will work
   *          只有shape的值为rounded-rect, capsule, rounded-square, 或circle时，才生效
   */
  borderRadiusPosition: '',
  /**
   * box sizing - 盒尺寸模型
   * @property { String } boxSizing border-box content-box
   */
  boxSizing: CONTENT_BOX,
  /**
   * disabled - 是否禁用
   * @property { Boolean } disabled
   */
  disabled: false,
  /**
   * disabled type - 禁用类型
   * @property { String } disabledType gray | opacity
   * gray: button gray - 禁用时，置灰
   * opacity: button reduce opacity - 禁用时，减少不透明度
   */
  disabledType: DISABLED_GRAY,
  /**
   * disabled opacity - 不透明度
   * @property { Number } disabledOpacity 0～1, numerical value between 0 and 1 - 0到1之间到数字值
   * @warning only if the value of disabledType is 'opacity', it will work - 只有disabledType的值为opacity才生效
   */
  disabledOpacity: DISABLED_OPACITY_VALUE,
  /**
   * effec - 效果
   * @property { String } effec '' | ripple
   */
  effec: '',
  /**
   * foreground color - 前景色
   * @property { String } fgcolor
   */
  fgcolor: '',
  /**
   * has border - 是否含有边框
   * @property { Boolean } hasBorder
   */
  hasBorder: false,
  /**
   * gradient - 渐变
   * @property { Boolean | Object } gradient
   *   @example
   *   gradient: {
   *     startColor: '#f00',
   *     endColor: '#0f0',
   *     type: 'linear',
   *     linearDirection: 'top right'
   *   }
   *   @example or
   *   gradient: {
   *     startColor: '#f00',
   *     endColor: '#0f0',
   *     type: 'radial',
   *     radialDirection: 'to in'
   *   }
   */
  gradient: false,
  /**
   * active gradient - active渐变
   * @property { Boolean | Object } activeGradient
   * property is same as gradient
   */
  activeGradient: false,
  /**
   * has halfpx border - 是否含有0.5px边框
   * @property { Boolean } hasHalfpxBorder
   * @warning if the value of this field is true, hasBorder will be invalid - 如果此字段的值为true，hasBorder是无效的
   */
  hasHalfpxBorder: false,
  /**
   * icon - 小图标
   * @property { Object } icon
   *   @example
   *   icon: {
   *     src: require('../../assets/svg/icons/icon-arrow-right-thin.svg'),
   *     fill: false,
   *     stopColor: false,
   *     stroke: false,
   *     position: 'right'
   *   }
   */
  icon: {},
  /**
   * if disabled prevent click - 如果禁用，是否阻止click
   * @property { Boolean } ifDisabledPreventClick
   */
  ifDisabledPreventClick: true,
  /**
   * inverse - 是否反转背景色为前景色
   * @property { Boolean } inverse
   * @warning only if one value of hasBorder or hasHalfpxBorder is true, it will work
   *          只有hasBorder或hasHalfpxBorder为true时才生效
   */
  inverse: false,
  /**
   * loading - loading样式
   * @property { Boolean | Object } loading
   *   @property { String } effect loading效果
   * @warning only if loading.effect='image', it will work - 只有loading.effect='image'时才生效
   *   @property { Object } image  loading图像
   *     @example
   *     image: {
   *       src: 'tail-spin',
   *       builtin: true,
   *       fill: false,
   *       stopColor: false,
   *       stroke: false
   *     }
   */
  loading: false,
  /**
   * ripple - 涟漪效果
   * @warning only if ripple='ripple', it will work - 只有ripple='ripple'时才生效
   * @property { Object } ripple
   * @example
   * ripple: {
   *   centerMode: false,
   *   fgcolor: '',
   *   size: 'md'
   * }
   */
  ripple: {},
  /**
   * shape - 形状
   * @property { String } shape rect | rounded-rect | capsule | square | rounded-square | circle | diamond |
   */
  shape: RECT,
  /**
   * size - 尺寸
   * @property { String } size xxs | xs | sm | md | lg | xl | xxl
   */
  size: SM,
  /**
   * skin - 皮肤
   * @property { String } skin major | minor | plain | success | info | danger | warning | custom
   */
  skin: PLAIN,
  /**
   * transition - 过渡效果
   * @property { Object | Boolean } transition
   * true: use defautl transition effect - 使用默认过渡效果
   * false: not use transition effect - 不用过渡效果
   * Object: set transition style
   *   @property { String } property        过渡属性
   *   @property { String } duration        过渡时间
   *   @property { String } timingFunction  速度曲线
   *   @property { String } delay           延迟时间
   * @example
   * transition: {
   *   property: 'all',
   *   duration: '300ms',
   *   timingFunction: 'linear',
   *   delay: '0ms'
   * }
   */
  transition: true
}

export default defaultProps
