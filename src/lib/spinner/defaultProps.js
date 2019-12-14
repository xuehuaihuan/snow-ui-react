import { SNAKE_SPIN } from './constant';

export const defaultProps = {
  /**
   * foreground color - 前景色
   * @property { String } fgcolor
   */
  fgcolor: '',
  /**
   * image - 图像
   * @warning image only does work when effect='image' - 只有effect='image'时，image才生效
   * @warning only SVG image can change skin, other types of image can not only change skin, but also may deform
   * 只有svg图像才能更换皮肤；其他类型图像不仅不能更换皮肤，还可能会变形；
   * @property { Object } image
   *   @property { String } src         图像地址
   *     builtin: audio | ball-triangle | circle-grid | circles | line-bounce | multiple-circles-fade | ring-ripple | ring-smoke | ring | tail-spin
   *   @property { Boolean } builtin    是否为内置图像
   *   @property { Boolean } fill       是否覆盖填充颜色
   *   @property { Boolean } stopColor  是否覆盖渐变停止处颜色
   *   @property { Boolean } stroke     是否覆盖描边颜色
   * @example
   * image: {
   *   src: 'tail-spin',
   *   builtin: true,
   *   fill: false,
   *   stopColor: false,
   *   stroke: false
   * }
   */
  image: {
    stopColor: true,
  },
  /**
   * effect - 效果
   * @property { Boolean } shape snake-spin | circle-fade | circle-line-fade | circle-scale-fade | line-bounce | line-square-bounce | line-circle-bounce | image
   */
  effect: SNAKE_SPIN,
  /**
   * size - 尺寸
   * @property { Boolean } size xxs | xs | sm | md | lg | xl | xxl
   */
  size: '',
};

export default defaultProps;
