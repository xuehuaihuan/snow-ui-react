import {
  DISABLED_GRAY, DISABLED_OPACITY,
} from '../../common/constant';
import {
  DEFAULT_SKIN_STYLE,
  DEFAULT_ACTIVE_SKIN_STYLE,
  DEFAULT_GRADIENT,
  DEFAULT_ACTIVE_GRADIENT,
} from '../constant';
import { isObject } from '../../common/utils';

// 禁用类型
const disabledTypes = [DISABLED_GRAY, DISABLED_OPACITY];

/**
 * is disabled gray - 是否为禁用置灰
 * @param  { String }  disabledType
 * @return { Boolean } as follows: - 如下：
 */
export const isDisabledGray = (disabledType) => {
  const type = disabledTypes.includes(disabledType) ? disabledType : DISABLED_GRAY;
  return type === DISABLED_GRAY;
};

/**
 * get disabled gray - 获取禁用置灰样式
 * @param  { Boolean }  hasHalfpxBorder
 * @param  { Boolean }  hasBorder
 * @param  { Object }   theme
 * @param  { Object }   propsGradient
 * @param  { Object }   propsActiveGradient
 * @return { Object }   as follows: - 如下：
 */
export const getDisabledGray = (hasHalfpxBorder, hasBorder, theme, propsGradient, propsActiveGradient) => {
  const skinStyle = Object.assign({}, DEFAULT_SKIN_STYLE);
  const activeSkinStyle = Object.assign({}, DEFAULT_ACTIVE_SKIN_STYLE);
  const gradient = Object.assign({}, DEFAULT_GRADIENT);
  const activeGradient = Object.assign({}, DEFAULT_ACTIVE_GRADIENT);

  if (hasHalfpxBorder || hasBorder) {
    skinStyle.borderColor = theme.buttonDisabledBorderColor;
    skinStyle.bgcolor = theme.buttonDisabledHasBorderBgcolor;
    skinStyle.fgcolor = theme.buttonDisabledHasBorderFgcolor;
    activeSkinStyle.borderColor = theme.buttonDisabledBorderColor;
    activeSkinStyle.bgcolor = theme.buttonDisabledHasBorderActiveBgcolor;
    activeSkinStyle.fgcolor = theme.buttonDisabledHasBorderFgcolor;
  } else {
    skinStyle.bgcolor = theme.buttonDisabledBgcolor;
    skinStyle.fgcolor = theme.buttonDisabledFgcolor;
    activeSkinStyle.bgcolor = theme.buttonDisabledActiveBgcolor;

    gradient.startColor = theme.buttonDisabledBggradientStartColor;
    gradient.endColor = theme.buttonDisabledBggradientEndColor;
    activeGradient.startColor = '';
    activeGradient.endColor = '';

    if (isObject(propsGradient)) {
      gradient.type = propsGradient.type ? propsGradient.type : gradient.type;
      gradient.linearDirection = propsGradient.linearDirection
        ? propsGradient.linearDirection : gradient.linearDirection;
      gradient.radialDirection = propsGradient.radialDirection
        ? propsGradient.radialDirection : gradient.radialDirection;
    }

    if (isObject(propsActiveGradient)) {
      activeGradient.type = propsActiveGradient.type ? propsActiveGradient.type : activeGradient.type;
      activeGradient.linearDirection = propsActiveGradient.linearDirection
        ? propsActiveGradient.linearDirection : activeGradient.linearDirection;
      activeGradient.radialDirection = propsActiveGradient.radialDirection
        ? propsActiveGradient.radialDirection : activeGradient.radialDirection;
    }
  }

  return {
    skinStyle,
    activeSkinStyle,
    gradient,
    activeGradient,
  };
};

/**
 * is disabled opacity - 是否为禁用不透明度
 * @param  { Object }  disabledType
 * @return { Boolean } as follows: - 如下：
 */
export const isDisabledOpacity = (disabledType) => {
  const type = disabledTypes.includes(disabledType) ? disabledType : DISABLED_GRAY;
  return type === DISABLED_OPACITY;
};
