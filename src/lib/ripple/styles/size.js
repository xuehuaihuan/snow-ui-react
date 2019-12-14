import {
  XXS, XS, SM, MD, LG, XL, XXL,
} from '../../common/constant';

/**
 * get size - 获取尺寸样式
 * @param  {Object} size
 * @return {String} as follows: - 如下：
 */
const sizes = [XXS, XS, SM, MD, LG, XL, XXL];
export const getSize = (size) => {
  size = size && sizes.includes(size) ? size : MD;

  let scale;
  switch (size) {
    case 'xxs':
      scale = 0.5;
      break;
    case 'xs':
      scale = 0.75;
      break;
    case 'sm':
      scale = 1;
      break;
    case 'md':
      scale = 2;
      break;
    case 'lg':
      scale = 3;
      break;
    case 'xl':
      scale = 4;
      break;
    case 'xxl':
    default:
      scale = 5;
      break;
  }

  return scale;
};
