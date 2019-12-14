import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { StyledButton } from './styles'
import {
  DIAMOND,
  STRING_EMPTY,
  RIPPLE
} from '../common/constant'
import defaultProps from './defaultProps'
import propTypes from './propTypes'
import { getLoading } from './styles/loading'
import { getIcon, hasIcon } from './styles/icon'
import { hasAbsolutePositionBorder } from './styles/border'
import { BUTTON_BORDER_CONTENT_CLASS, BUTTON_DIAMOND_CONTENT_CLASS } from './constant'
import { Ripple } from '../ripple'

const handleClick = (onClick, disabled, ifDisabledPreventClick, loading, event) => {
  // Loading does not allow click - 加载中不允许点击
  if (loading) {
    return
  }

  // disabled, and ifDisabledPreventClick is true, does not allow click
  // 禁用，并且ifDisabledPreventClick为true，不允许点击
  if (disabled && ifDisabledPreventClick) {
    return
  }

  onClick && onClick(event)
}

/**
 * Button - 按钮组件
 * @param  {Object} props Component props - 组件属性
 * @return {Component} React Component - React 组件
 */

export const Button = ({ onClick, disabled, loading, shape, children, ...props }) => {
  const themeContext = useContext(ThemeContext)
  let ButtonContent

  if (shape === DIAMOND) {
    if (loading || hasIcon(props.icon)) {
      ButtonContent = (
        <span className={
          `${BUTTON_DIAMOND_CONTENT_CLASS}
            ${hasAbsolutePositionBorder(props.hasHalfpxBorder, props.hasBorder, props.boxSizing)
              ? BUTTON_BORDER_CONTENT_CLASS : STRING_EMPTY}
          `
        }
        >
          {loading ? getLoading(loading, props.size, children) : getIcon(props.icon, themeContext, children)}
        </span>
      )
    } else {
      ButtonContent = (
        <span className={
          `${BUTTON_DIAMOND_CONTENT_CLASS}
            ${hasAbsolutePositionBorder(props.hasHalfpxBorder, props.hasBorder, props.boxSizing)
              ? BUTTON_BORDER_CONTENT_CLASS : STRING_EMPTY}
          `
        }
        >
          {children}
        </span>
      )
    }
  } else {
    if (loading || hasIcon(props.icon)) {
      if (hasAbsolutePositionBorder(props.hasHalfpxBorder, props.hasBorder, props.boxSizing)) {
        ButtonContent = (
          <span className={BUTTON_BORDER_CONTENT_CLASS}>
            {loading ? getLoading(loading, props.size, children) : getIcon(props.icon, themeContext, children)}
          </span>
        )
      } else {
        ButtonContent = (
          <>
            {loading ? getLoading(loading, props.size, children) : getIcon(props.icon, themeContext, children)}
          </>
        )
      }
    } else {
      if (hasAbsolutePositionBorder(props.hasHalfpxBorder, props.hasBorder, props.boxSizing)) {
        ButtonContent = (
          <span className={BUTTON_BORDER_CONTENT_CLASS}>
            {children}
          </span>
        )
      } else {
        ButtonContent = (
          <>
            {children}
          </>
        )
      }
    }
  }

  return (
    <StyledButton
      {...props}
      onClick={(event) => handleClick(onClick, disabled, props.ifDisabledPreventClick, loading, event)}
      // escape non-standard HTML attributes to avoid react error
      // 转义非标准 html 属性，避免React报错
      escapeDisabled={disabled}
      escapeLoading={loading}
      escapeShape={shape}
    >
      {
        props.effect === RIPPLE && !disabled && !loading ? (
          <>
            {ButtonContent}
            <Ripple {...props.ripple} />
          </>
        ) : ButtonContent
      }
    </StyledButton>
  )
}

Button.defaultProps = defaultProps

Button.propTypes = propTypes

export default Button
