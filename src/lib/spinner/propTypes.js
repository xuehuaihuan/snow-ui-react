import PropTypes from 'prop-types';

export const propTypes = {
  fgcolor: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    builtin: PropTypes.bool,
    fill: PropTypes.bool,
    stopColor: PropTypes.bool,
    stroke: PropTypes.bool,
  }),
  effect: PropTypes.string,
  size: PropTypes.string,
};

export default propTypes;
