import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledSpinner,
  StyledImage,
} from './styles';
import CircleFade from './css-animation/CircleFade';
import CircleLineFade from './css-animation/CircleLineFade';
import CircleScaleFade from './css-animation/CircleScaleFade';
import LineBounce from './css-animation/LineBounce';
import LineSquareBounce from './css-animation/LineSquareBounce';
import LineCircleBounce from './css-animation/LineCircleBounce';
import {
  CIRCLE_FADE,
  CIRCLE_LINE_FADE,
  CIRCLE_SCALE_FADE,
  LINE_BOUNCE,
  LINE_SQUARE_BOUNCE,
  LINE_CIRCLE_BOUNCE,
  IMAGE,
  SNAKE_SPIN,
} from './constant';
import SVGInject from '@iconfu/svg-inject';
import { isObject, isSvg } from '../common/utils';
import defaultProps from './defaultProps';
import propTypes from './propTypes';

const DEFAULT_IMAGE = {
  src: 'tail-spin',
  builtin: true,
  fill: false,
  stroke: false,
};

export const Spinner = ({ color, ...props }) => {
  const effect = props.effect;
  let component;
  const theme = useContext(ThemeContext);

  switch (effect) {
    case CIRCLE_FADE:
      component = React.createElement(CircleFade, props);
      break;
    case CIRCLE_LINE_FADE:
      component = React.createElement(CircleLineFade, props);
      break;
    case CIRCLE_SCALE_FADE:
      component = React.createElement(CircleScaleFade, props);
      break;
    case LINE_BOUNCE:
      component = React.createElement(LineBounce, props);
      break;
    case LINE_SQUARE_BOUNCE:
      component = React.createElement(LineSquareBounce, props);
      break;
    case LINE_CIRCLE_BOUNCE:
      component = React.createElement(LineCircleBounce, props);
      break;
    case IMAGE: {
      const copyImage = Object.assign({}, DEFAULT_IMAGE);
      const image = isObject(props.image) ? Object.assign(copyImage, props.image) : DEFAULT_IMAGE;
      const src = image.src && image.builtin
        ? require(`./svg/${image.src}.svg`) : image.src;

      const img = React.createElement('img', {
        src: src,
        onLoad (event) {
          if (image.builtin || isSvg(src)) {
            SVGInject(event.currentTarget, {
              beforeInject: (img, svg) => {
                if (props.image.fill && !svg.fill) {
                  const len = svg.querySelectorAll('[fill]').length;
                  if (len === 0) {
                    svg.setAttribute('fill', theme.buttonMajorFgcolor);
                  }
                }

                if (props.image.stroke && !svg.stroke) {
                  const len = svg.querySelectorAll('[stroke]').length;
                  if (len === 0) {
                    svg.setAttribute('stroke', theme.buttonMajorFgcolor);
                  }
                }

                if (props.image.stopColor && !svg['stop-color']) {
                  const len = svg.querySelectorAll('[stop-color]').length;
                  if (len === 0) {
                    svg.setAttribute('stop-color', theme.buttonMajorFgcolor);
                  }
                }
              },
            });
          }
        },
      }, props.children);

      component = React.createElement(StyledImage, props, img);
      break;
    }
    case SNAKE_SPIN:
    default:
      component = React.createElement(StyledSpinner, props);
      break;
  }

  return component;
};

Spinner.defaultProps = defaultProps;

Spinner.propTypes = propTypes;

export default Spinner;
