import PropTypes from 'prop-types';

export const propTypes = {
  active: PropTypes.oneOfType([
    PropTypes.shape({
      borderColor: PropTypes.string,
      bgcolor: PropTypes.string,
      color: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
  bgcolor: PropTypes.string,
  block: PropTypes.bool,
  border: PropTypes.shape({
    width: PropTypes.string,
    style: PropTypes.string,
    color: PropTypes.string,
  }),
  borderRadiusPosition: PropTypes.string,
  boxSizing: PropTypes.string,
  disabled: PropTypes.bool,
  disabledType: PropTypes.string,
  disabledOpacity: PropTypes.number,
  fgcolor: PropTypes.string,
  gradient: PropTypes.oneOfType([
    PropTypes.shape({
      startColor: PropTypes.string,
      endColor: PropTypes.string,
      type: PropTypes.string,
      linearDirection: PropTypes.string,
      radialDirection: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
  activeGradient: PropTypes.oneOfType([
    PropTypes.shape({
      startColor: PropTypes.string,
      endColor: PropTypes.string,
      type: PropTypes.string,
      linearDirection: PropTypes.string,
      radialDirection: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
  hasBorder: PropTypes.bool,
  hasHalfpxBorder: PropTypes.bool,
  icon: PropTypes.shape({
    src: PropTypes.string,
    fill: PropTypes.bool,
    stroke: PropTypes.bool,
    stopColor: PropTypes.bool,
    position: PropTypes.string,
  }),
  ifDisabledPreventClick: PropTypes.bool,
  inverse: PropTypes.bool,
  loading: PropTypes.oneOfType([
    PropTypes.shape({
      effect: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        fill: PropTypes.bool,
        stroke: PropTypes.bool,
        stopColor: PropTypes.bool,
      }),
    }),
    PropTypes.bool,
  ]),
  ripple: PropTypes.shape({
    centerMode: PropTypes.bool,
    fgcolor: PropTypes.string,
    size: PropTypes.string,
  }),
  shape: PropTypes.string,
  size: PropTypes.string,
  skin: PropTypes.string,
  transition: PropTypes.oneOfType([
    PropTypes.shape({
      property: PropTypes.string,
      duration: PropTypes.string,
      timingFunction: PropTypes.string,
      delay: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
};

export default propTypes;
