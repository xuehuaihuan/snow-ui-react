import {
  MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM,
  BORDER_BOX, CONTENT_BOX,
  BOOLEAN_FALSE,
  GRADIENT_LINEAR, GRADIENT_RADIAL, TO_OUT,
  RIPPLE
} from '../../common/constant'
import {
  DEFAULT_SKIN_STYLE,
  DEFAULT_ACTIVE_SKIN_STYLE,
  DEFAULT_GRADIENT,
  DEFAULT_ACTIVE_GRADIENT
} from '../constant'
import {
  isDisabledGray, getDisabledGray, isDisabledOpacity
} from './disabled'
import { isObject } from '../../common/utils'

/**
 * get color - 获取颜色
 * @param  { Object }   props
 * @return { Boolean }  as follows: - 如下：
 */
const skins = [MAJOR, MINOR, PLAIN, SUCCESS, INFO, DANGER, WARNING, CUSTOM]
export const getColor = (props) => {
  const skin = skins.includes(props.skin) ? props.skin : PLAIN
  const skinStyle = Object.assign({}, DEFAULT_SKIN_STYLE)
  const activeSkinStyle = Object.assign({}, DEFAULT_ACTIVE_SKIN_STYLE)
  const gradient = Object.assign({}, DEFAULT_GRADIENT)
  const activeGradient = Object.assign({}, DEFAULT_ACTIVE_GRADIENT)

  switch (skin) {
    case MAJOR:
      if (props.hasHalfpxBorder || props.hasBorder) {
        skinStyle.borderColor = props.hasHalfpxBorder ? '' : props.theme.buttonMajorBorderColor
        skinStyle.bgcolor = props.theme.buttonMajorHasBorderBgcolor
        skinStyle.fgcolor = props.theme.buttonMajorHasBorderFgcolor
        skinStyle.halfpxBorderColor = props.hasHalfpxBorder ? props.theme.buttonMajorBorderColor : ''

        if (props.inverse) {
          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = props.theme.buttonMajorInverseActiveHalfpxBorderColor
          }
          activeSkinStyle.bgcolor = props.theme.buttonMajorInverseActiveBgcolor
          activeSkinStyle.fgcolor = props.theme.buttonMajorInverseActiveFgcolor
        } else {
          activeSkinStyle.bgcolor = props.theme.buttonMajorHasBorderActiveBgcolor
        }
      } else {
        skinStyle.bgcolor = props.theme.buttonMajorBgcolor
        skinStyle.fgcolor = props.theme.buttonMajorFgcolor
        activeSkinStyle.bgcolor = props.theme.buttonMajorActiveBgcolor

        gradient.startColor = props.theme.buttonMajorBggradientStartColor
        gradient.endColor = props.theme.buttonMajorBggradientEndColor
        activeGradient.startColor = props.theme.buttonMajorActiveBggradientStartColor
        activeGradient.endColor = props.theme.buttonMajorActiveBggradientEndColor
      }

      break
    case MINOR:
      if (props.hasHalfpxBorder || props.hasBorder) {
        skinStyle.borderColor = props.hasHalfpxBorder ? '' : props.theme.buttonMinorBorderColor
        skinStyle.bgcolor = props.theme.buttonMinorHasBorderBgcolor
        skinStyle.fgcolor = props.theme.buttonMinorHasBorderFgcolor
        skinStyle.halfpxBorderColor = props.hasHalfpxBorder ? props.theme.buttonMinorBorderColor : ''

        if (props.inverse) {
          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = props.theme.buttonMinorInverseActiveHalfpxBorderColor
          }
          activeSkinStyle.bgcolor = props.theme.buttonMinorInverseActiveBgcolor
          activeSkinStyle.fgcolor = props.theme.buttonMinorInverseActiveFgcolor
        } else {
          activeSkinStyle.bgcolor = props.theme.buttonMinorHasBorderActiveBgcolor
        }
      } else {
        skinStyle.bgcolor = props.theme.buttonMinorBgcolor
        skinStyle.fgcolor = props.theme.buttonMinorFgcolor
        activeSkinStyle.bgcolor = props.theme.buttonMinorActiveBgcolor

        gradient.startColor = props.theme.buttonMinorBggradientStartColor
        gradient.endColor = props.theme.buttonMinorBggradientEndColor
        activeGradient.startColor = props.theme.buttonMinorActiveBggradientStartColor
        activeGradient.endColor = props.theme.buttonMinorActiveBggradientEndColor
      }

      break
    case PLAIN:
      if (props.hasHalfpxBorder || props.hasBorder) {
        skinStyle.borderColor = props.hasHalfpxBorder ? '' : props.theme.buttonPlainBorderColor
        skinStyle.bgcolor = props.theme.buttonPlainHasBorderBgcolor
        skinStyle.fgcolor = props.theme.buttonPlainHasBorderFgcolor
        skinStyle.halfpxBorderColor = props.hasHalfpxBorder ? props.theme.buttonPlainBorderColor : ''

        if (props.inverse) {
          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = props.theme.buttonPlainInverseActiveHalfpxBorderColor
          } else {
            activeSkinStyle.borderColor = props.theme.buttonPlainInverseActiveBorderColor
          }
          activeSkinStyle.bgcolor = props.theme.buttonPlainInverseActiveBgcolor
          activeSkinStyle.fgcolor = props.theme.buttonPlainInverseActiveFgcolor
        } else {
          activeSkinStyle.bgcolor = props.theme.buttonPlainHasBorderActiveBgcolor
        }
      } else {
        skinStyle.bgcolor = props.theme.buttonPlainBgcolor
        skinStyle.fgcolor = props.theme.buttonPlainFgcolor
        activeSkinStyle.bgcolor = props.theme.buttonPlainActiveBgcolor

        gradient.startColor = props.theme.buttonPlainBggradientStartColor
        gradient.endColor = props.theme.buttonPlainBggradientEndColor
        activeGradient.startColor = props.theme.buttonPlainActiveBggradientStartColor
        activeGradient.endColor = props.theme.buttonPlainActiveBggradientEndColor
      }

      break
    case SUCCESS:
      if (props.hasHalfpxBorder || props.hasBorder) {
        skinStyle.borderColor = props.hasHalfpxBorder ? '' : props.theme.buttonSuccessBorderColor
        skinStyle.bgcolor = props.theme.buttonSuccessHasBorderBgcolor
        skinStyle.fgcolor = props.theme.buttonSuccessHasBorderFgcolor
        skinStyle.halfpxBorderColor = props.hasHalfpxBorder ? props.theme.buttonSuccessBorderColor : ''

        if (props.inverse) {
          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = props.theme.buttonSuccessInverseActiveHalfpxBorderColor
          }
          activeSkinStyle.bgcolor = props.theme.buttonSuccessInverseActiveBgcolor
          activeSkinStyle.fgcolor = props.theme.buttonSuccessInverseActiveFgcolor
        } else {
          activeSkinStyle.bgcolor = props.theme.buttonSuccessHasBorderActiveBgcolor
        }
      } else {
        skinStyle.bgcolor = props.theme.buttonSuccessBgcolor
        skinStyle.fgcolor = props.theme.buttonSuccessFgcolor
        activeSkinStyle.bgcolor = props.theme.buttonSuccessActiveBgcolor

        gradient.startColor = props.theme.buttonSuccessBggradientStartColor
        gradient.endColor = props.theme.buttonSuccessBggradientEndColor
        activeGradient.startColor = props.theme.buttonSuccessActiveBggradientStartColor
        activeGradient.endColor = props.theme.buttonSuccessActiveBggradientEndColor
      }

      break
    case INFO:
      if (props.hasHalfpxBorder || props.hasBorder) {
        skinStyle.borderColor = props.hasHalfpxBorder ? '' : props.theme.buttonInfoBorderColor
        skinStyle.bgcolor = props.theme.buttonInfoHasBorderBgcolor
        skinStyle.fgcolor = props.theme.buttonInfoHasBorderFgcolor
        skinStyle.halfpxBorderColor = props.hasHalfpxBorder ? props.theme.buttonInfoBorderColor : ''

        if (props.inverse) {
          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = props.theme.buttonInfoInverseActiveHalfpxBorderColor
          }
          activeSkinStyle.bgcolor = props.theme.buttonInfoInverseActiveBgcolor
          activeSkinStyle.fgcolor = props.theme.buttonInfoInverseActiveFgcolor
        } else {
          activeSkinStyle.bgcolor = props.theme.buttonInfoHasBorderActiveBgcolor
        }
      } else {
        skinStyle.bgcolor = props.theme.buttonInfoBgcolor
        skinStyle.fgcolor = props.theme.buttonInfoFgcolor
        activeSkinStyle.bgcolor = props.theme.buttonInfoActiveBgcolor

        gradient.startColor = props.theme.buttonInfoBggradientStartColor
        gradient.endColor = props.theme.buttonInfoBggradientEndColor
        activeGradient.startColor = props.theme.buttonInfoActiveBggradientStartColor
        activeGradient.endColor = props.theme.buttonInfoActiveBggradientEndColor
      }

      break
    case DANGER:
      if (props.hasHalfpxBorder || props.hasBorder) {
        skinStyle.borderColor = props.hasHalfpxBorder ? '' : props.theme.buttonDangerBorderColor
        skinStyle.bgcolor = props.theme.buttonDangerHasBorderBgcolor
        skinStyle.fgcolor = props.theme.buttonDangerHasBorderFgcolor
        skinStyle.halfpxBorderColor = props.hasHalfpxBorder ? props.theme.buttonDangerBorderColor : ''

        if (props.inverse) {
          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = props.theme.buttonDangerInverseActiveHalfpxBorderColor
          }
          activeSkinStyle.bgcolor = props.theme.buttonDangerInverseActiveBgcolor
          activeSkinStyle.fgcolor = props.theme.buttonDangerInverseActiveFgcolor
        } else {
          activeSkinStyle.bgcolor = props.theme.buttonDangerHasBorderActiveBgcolor
        }
      } else {
        skinStyle.bgcolor = props.theme.buttonDangerBgcolor
        skinStyle.fgcolor = props.theme.buttonDangerFgcolor
        activeSkinStyle.bgcolor = props.theme.buttonDangerActiveBgcolor

        gradient.startColor = props.theme.buttonDangerBggradientStartColor
        gradient.endColor = props.theme.buttonDangerBggradientEndColor
        activeGradient.startColor = props.theme.buttonDangerActiveBggradientStartColor
        activeGradient.endColor = props.theme.buttonDangerActiveBggradientEndColor
      }

      break
    case WARNING:
      if (props.hasHalfpxBorder || props.hasBorder) {
        skinStyle.borderColor = props.hasHalfpxBorder ? '' : props.theme.buttonWarningBorderColor
        skinStyle.bgcolor = props.theme.buttonWarningHasBorderBgcolor
        skinStyle.fgcolor = props.theme.buttonWarningHasBorderFgcolor
        skinStyle.halfpxBorderColor = props.hasHalfpxBorder ? props.theme.buttonWarningBorderColor : ''

        if (props.inverse) {
          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = props.theme.buttonWarningInverseActiveHalfpxBorderColor
          }
          activeSkinStyle.bgcolor = props.theme.buttonWarningInverseActiveBgcolor
          activeSkinStyle.fgcolor = props.theme.buttonWarningInverseActiveFgcolor
        } else {
          activeSkinStyle.bgcolor = props.theme.buttonWarningHasBorderActiveBgcolor
        }
      } else {
        skinStyle.bgcolor = props.theme.buttonWarningBgcolor
        skinStyle.fgcolor = props.theme.buttonWarningFgcolor
        activeSkinStyle.bgcolor = props.theme.buttonWarningActiveBgcolor

        gradient.startColor = props.theme.buttonWarningBggradientStartColor
        gradient.endColor = props.theme.buttonWarningBggradientEndColor
        activeGradient.startColor = props.theme.buttonWarningActiveBggradientStartColor
        activeGradient.endColor = props.theme.buttonWarningActiveBggradientEndColor
      }

      break
    case CUSTOM:
    default: {
      if (props.hasHalfpxBorder || props.hasBorder) {
        if (props.inverse) {
          let active = {
            borderColor: props.theme.buttonCustomInverseActiveBorderColor,
            bgcolor: props.theme.buttonCustomInverseActiveBgcolor,
            fgcolor: props.theme.buttonCustomInverseActiveFgcolor
          }

          active = isObject(props.active) ? Object.assign(active, props.active) : active

          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = active.borderColor
          } else {
            activeSkinStyle.borderColor = (active.borderColor || active.bgcolor)
          }
          activeSkinStyle.bgcolor = active.bgcolor
          activeSkinStyle.fgcolor = active.fgcolor
        } else {
          let active = {
            borderColor: '',
            bgcolor: props.theme.buttonCustomHasBorderActiveBgcolor,
            fgcolor: ''
          }

          active = isObject(props.active) ? Object.assign(active, props.active) : active

          if (props.hasHalfpxBorder) {
            activeSkinStyle.halfpxBorderColor = active.borderColor
          } else {
            activeSkinStyle.borderColor = active.borderColor
          }

          activeSkinStyle.fgcolor = active.fgcolor
          activeSkinStyle.bgcolor = active.bgcolor
        }

        skinStyle.halfpxBorderColor = props.border.color ? '' : props.theme.buttonCustomBorderColor
        skinStyle.borderColor = props.border.color ? '' : props.theme.buttonCustomBorderColor
        skinStyle.bgcolor = props.bgcolor || props.theme.buttonCustomHasBorderBgcolor
        skinStyle.fgcolor = props.fgcolor || props.theme.buttonCustomHasBorderFgcolor
      } else {
        let active = {
          bgcolor: props.theme.buttonCustomActiveBgcolor,
          fgcolor: ''
        }

        active = isObject(props.active) ? Object.assign(active, props.active) : active

        skinStyle.bgcolor = props.bgcolor || props.theme.buttonCustomBgcolor
        skinStyle.fgcolor = props.fgcolor || props.theme.buttonCustomFgcolor

        activeSkinStyle.bgcolor = active.bgcolor
        activeSkinStyle.fgcolor = active.fgcolor

        if (isObject(props.gradient)) {
          gradient.startColor = props.gradient.startColor || props.theme.buttonCustomBggradientStartColor
          gradient.endColor = props.gradient.endColor || props.theme.buttonCustomBggradientEndColor
        }
        if (isObject(props.activeGradient)) {
          activeGradient.startColor = props.activeGradient.startColor || props.theme.buttonCustomActiveBggradientStartColor
          activeGradient.endColor = props.activeGradient.endColor || props.theme.buttonCustomActiveBggradientEndColor
        }
      }

      break
    }
  }

  if (isObject(props.gradient)) {
    gradient.type = props.gradient.type ? props.gradient.type : gradient.type
    gradient.linearDirection = props.gradient.linearDirection
      ? props.gradient.linearDirection : gradient.linearDirection
    gradient.radialDirection = props.gradient.radialDirection
      ? props.gradient.radialDirection : gradient.radialDirection
  }

  if (isObject(props.activeGradient)) {
    activeGradient.type = props.activeGradient.type ? props.activeGradient.type : activeGradient.type
    activeGradient.linearDirection = props.activeGradient.linearDirection
      ? props.activeGradient.linearDirection : activeGradient.linearDirection
    activeGradient.radialDirection = props.activeGradient.radialDirection
      ? props.activeGradient.radialDirection : activeGradient.radialDirection
  }

  return {
    skinStyle,
    activeSkinStyle,
    gradient,
    activeGradient
  }
}

/**
 * get skin rule - 获取皮肤样式规则
 * @param  { Object } skinStyle
 * @param  { Object } gradient
 * @param  { Object } propsGradient
 * @param  { String } boxSizing
 * @param  { Object } icon
 * @return { String } as follows: - 如下：
 */
const getSkinRule = (skinStyle, gradient, propsGradient, boxSizing, icon) => {
  return `
    ${
      (boxSizing === CONTENT_BOX && skinStyle.borderColor)
      ? `border-color: ${skinStyle.borderColor};` : ''
    }
    // fallback background-color if gradient is not supported
    ${skinStyle.bgcolor ? `background-color: ${skinStyle.bgcolor};` : ''}
    ${skinStyle.fgcolor ? `color: ${skinStyle.fgcolor};` : ''}

    ${
      propsGradient && gradient.type === GRADIENT_LINEAR && gradient.startColor
      ? `background-image: linear-gradient(
        ${gradient.linearDirection}, ${gradient.startColor}, ${gradient.endColor}
      );` : ''
    }
    ${
      propsGradient && gradient.type === GRADIENT_RADIAL && gradient.startColor
      ? `background-image: radial-gradient(
        circle farthest-corner,
        ${
          gradient.radialDirection === TO_OUT
          ? `${gradient.startColor}, ${gradient.endColor}`
          : `${gradient.endColor}, ${gradient.startColor}`
        }
      );` : ''
    }

    ${
      skinStyle.halfpxBorderColor ? `&::before {
        border-color: ${skinStyle.halfpxBorderColor};
      }` : ''
    }
    ${
      (boxSizing === BORDER_BOX && skinStyle.borderColor) ? `&::before {
        border-color: ${skinStyle.borderColor};
      }` : ''
    }

    ${
      skinStyle.fgcolor && icon.fill ? `[fill]:not([fill='none']) {
        fill: ${skinStyle.fgcolor};
      }` : ''
    }
    ${
      skinStyle.fgcolor && icon.stroke ? `[stroke]:not([stroke='none']) {
        stroke: ${skinStyle.fgcolor};
      }` : ''
    }
    ${
      skinStyle.fgcolor && icon.stopColor ? `[stop-color] {
        stop-color: ${skinStyle.fgcolor};
      }` : ''
    }
  `
}

/**
 * get active skin rule - 获取active皮肤样式规则
 * @param  { Object } activeSkinStyle
 * @param  { Object } activeGradient
 * @param  { Object } propsActiveGradient
 * @param  { Object } boxSizing
 * @param  { Object } icon
 * @return { String } as follows: - 如下：
 */
const getActiveSkinRule = (activeSkinStyle, activeGradient, propsActiveGradient, boxSizing, icon) => {
  return `
    &:hover,
    &:active {
      ${
        (boxSizing === CONTENT_BOX && activeSkinStyle.borderColor)
        ? `border-color: ${activeSkinStyle.borderColor};` : ''
      }
      // fallback background-color if gradient is not supported
      ${activeSkinStyle.bgcolor ? `background-color: ${activeSkinStyle.bgcolor};` : ''}
      ${activeSkinStyle.fgcolor ? `color: ${activeSkinStyle.fgcolor};` : ''}

      ${
        propsActiveGradient && activeGradient.type === GRADIENT_LINEAR && activeGradient.startColor
        ? `background-image: linear-gradient(
          ${activeGradient.linearDirection}, ${activeGradient.startColor}, ${activeGradient.endColor}
        );` : ''
      }
      ${
        propsActiveGradient && activeGradient.type === GRADIENT_RADIAL && activeGradient.startColor
        ? `background-image: radial-gradient(
          circle farthest-corner,
          ${
            activeGradient.radialDirection === TO_OUT
            ? `${activeGradient.startColor}, ${activeGradient.endColor}`
            : `${activeGradient.endColor}, ${activeGradient.startColor}`
          }
        );` : ''
      }

      ${
        activeSkinStyle.halfpxBorderColor ? `&::before {
          border-color: ${activeSkinStyle.halfpxBorderColor};
        }` : ''
      }
      ${
        (boxSizing === BORDER_BOX && activeSkinStyle.borderColor) ? `&::before {
          border-color: ${activeSkinStyle.borderColor};
        }` : ''
      }
    
      ${
        activeSkinStyle.fgcolor && icon.fill ? `[fill]:not([fill='none']) {
          fill: ${activeSkinStyle.fgcolor};
        }` : ''
      }
      ${
        activeSkinStyle.fgcolor && icon.stroke ? `[stroke]:not([stroke='none']) {
          stroke: ${activeSkinStyle.fgcolor};
        }` : ''
      }
      ${
        activeSkinStyle.fgcolor && icon.stopColor ? `[stop-color] {
          stop-color: ${activeSkinStyle.fgcolor};
        }` : ''
      }
    }
  `
}

/**
 * get skin - 获取皮肤样式
 * @param  { Object } props
 * @return { String } as follows: - 如下：
 */
export const getSkin = (props) => {
  let skinStyle
  let activeSkinStyle = Object.assign({}, DEFAULT_ACTIVE_SKIN_STYLE)
  let gradient
  let activeGradient = Object.assign({}, DEFAULT_ACTIVE_GRADIENT)

  let skinRule = ''
  let activeSkinRule = ''
  let disabledRule = ''

  if (props.escapeDisabled || props.escapeLoading) {
    if (isDisabledGray(props.disabledType)) {
      const allDisabledStyle = getDisabledGray(
        props.hasHalfpxBorder,
        props.hasBorder,
        props.theme,
        props.gradient,
        props.activeGradient
      )
      skinStyle = allDisabledStyle.skinStyle
      activeSkinStyle = allDisabledStyle.activeSkinStyle
      gradient = allDisabledStyle.gradient
      activeGradient = allDisabledStyle.activeGradient

      skinRule = getSkinRule(skinStyle, gradient, props.gradient, props.boxSizing, props.icon)
      activeSkinRule = getActiveSkinRule(activeSkinStyle, activeGradient, props.activeGradient, props.boxSizing, props.icon)

      return `
        ${skinRule}
        ${activeSkinRule}
      `
    }

    disabledRule = `opacity: ${props.disabledOpacity};`
  }

  const allStyle = getColor(props)
  skinStyle = allStyle.skinStyle
  activeSkinStyle = allStyle.activeSkinStyle
  gradient = allStyle.gradient
  activeGradient = allStyle.activeGradient

  if (
    props.active === BOOLEAN_FALSE ||
    isDisabledOpacity(props.disabledType) ||
    props.effect === RIPPLE
  ) {
    // reset active style to default - 重置active样式为空
    activeSkinStyle = Object.assign({}, DEFAULT_ACTIVE_SKIN_STYLE)
    activeGradient = Object.assign({}, DEFAULT_ACTIVE_GRADIENT)
  }

  skinRule = getSkinRule(skinStyle, gradient, props.gradient, props.boxSizing, props.icon)
  activeSkinRule = getActiveSkinRule(activeSkinStyle, activeGradient, props.activeGradient, props.boxSizing, props.icon)

  return `
     ${skinRule}
     ${activeSkinRule}
     ${disabledRule}
   `
}
