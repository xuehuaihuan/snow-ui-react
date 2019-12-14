import React from 'react';
import styled from 'styled-components';
import {
  RIGHT, LEFT,
  UNDEFINED, NULL,
} from '../../common/constant';
import { isSvg } from '../../common/utils';
import SVGInject from '@iconfu/svg-inject';

export const StyledIcon = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;

  &,
  & + .button-text {
    vertical-align: middle;
  }

  img,
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

/**
 * has icon - 是否有icon
 * @param  { Object }   icon
 * @return { Boolean }  as follows: - 如下：
 */
export const hasIcon = (icon) => {
  return !!(icon && icon.src);
};

/**
 * get for has icon - 获取有icon样式
 * @return { String }   as follows: - 如下：
 */
export const getForHasIcon = () => {
  return `
    .for-has-icon:not(:last-child) {
      margin-right: 0.5em;
    }
  `;
};

/**
 * get button text - 获取按钮文本
 * @param  { any }      children
 * @return { JSX }  as follows: - 如下：
 */
export const getButtonText = (children) => (
  children ? (
    <span className='button-text for-has-icon'>
      {children}
    </span>
  ) : NULL
);

/**
 * get styled icon - 获取styled图标
 * @param  { Object }   icon
 * @param  { Object }   theme
 * @return { JSX }  as follows: - 如下：
 */
export const getStyledIcon = (icon, theme) => {
  return (
    <StyledIcon className='button-icon for-has-icon'>
      <img
        src={icon.src}
        alt='icon'
        onLoad={(event) => {
          if (isSvg(icon.src)) {
            SVGInject(event.currentTarget, {
              beforeInject: (img, svg) => {
                if (icon.fill && !svg.fill) {
                  const len = svg.querySelectorAll('[fill]').length;
                  if (len === 0) {
                    svg.setAttribute('fill', theme.buttonMajorFgcolor);
                  }
                }

                if (icon.stroke && !svg.stroke) {
                  const len = svg.querySelectorAll('[stroke]').length;
                  if (len === 0) {
                    svg.setAttribute('stroke', theme.buttonMajorFgcolor);
                  }
                }

                if (icon.stopColor && !svg['stop-color']) {
                  const len = svg.querySelectorAll('[stop-color]').length;
                  if (len === 0) {
                    svg.setAttribute('stop-color', theme.buttonMajorFgcolor);
                  }
                }
              },
            });
          }
        }}
      />
    </StyledIcon>
  );
};

/**
 * get button text - 获取按钮文本
 * @param  { Object }   icon
 * @param  { Object }   theme
 * @param  { any }      children
 * @return { Boolean }  as follows: - 如下：
 */
export const getIcon = (icon, theme, children) => {
  return (
    <>
      {(icon.position === LEFT || icon.position === UNDEFINED) ? getStyledIcon(icon, theme) : NULL}
      {getButtonText(children)}
      {icon.position === RIGHT ? getStyledIcon(icon, theme) : NULL}
    </>
  );
};
