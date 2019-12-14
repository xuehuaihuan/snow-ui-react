import {
  XXS, XS, SM, MD, LG, XL, XXL,
  CIRCLE, SQUARE, ROUNDED_SQUARE,
  BORDER_BOX, CONTENT_BOX,
  STRING_EMPTY,
  HIDDEN, NORMAL,
} from '../../common/constant';

/**
 * get size - 获取尺寸样式
 * @param  { String }   size
 * @param  { String }   shape
 * @param  { Function } scpx
 * If font-size is less than 12px, line-height must be set to normal and height to auto.
 * Although the height is different from the design draft,
 * it can ensure that the text can be displayed in the middle of each browser.
 * 如果font-size小于12px，须把line-height设置为normal，height设置为auto
 * 虽然高度和设计稿有出入，
 * 但是可以保证文本在各个浏览器都能居中显示
 * @return {String} as follows: - 如下：
 */
const sizes = [XXS, XS, SM, MD, LG, XL, XXL];
export const getSize = (size, shape, scpx) => {
  const lineHeightNormal = NORMAL;
  const lineHeightNumber = '1.5';
  // height / width === 1 - 高宽比是否为1
  const aspectRatioIsOne = (
    shape === CIRCLE ||
    shape === SQUARE ||
    shape === ROUNDED_SQUARE
  );

  let overflow = STRING_EMPTY;
  let padding = STRING_EMPTY;
  let width = STRING_EMPTY;
  let height = STRING_EMPTY;
  let fontSize = STRING_EMPTY;
  let lineHeight = STRING_EMPTY;
  let boxSizing = STRING_EMPTY;

  size = size && sizes.includes(size) ? size : SM;

  switch (size) {
    case XXS:
      if (aspectRatioIsOne) {
        width = scpx(12);
        height = scpx(12);
      } else {
        padding = `${scpx(1)} ${scpx(10)}`;
        lineHeight = lineHeightNormal;
      }

      fontSize = scpx(8);
      break;
    case XS:
      if (aspectRatioIsOne) {
        width = scpx(18);
        height = scpx(18);
      } else {
        padding = `${scpx(3)} ${scpx(12)}`;
        lineHeight = lineHeightNormal;
      }

      fontSize = scpx(10);
      break;
    case SM:
      if (aspectRatioIsOne) {
        width = scpx(24);
        height = scpx(24);
      } else {
        padding = `${scpx(3)} ${scpx(14)}`;
        lineHeight = lineHeightNumber;
      }

      fontSize = scpx(12);
      break;
    case MD:
      if (aspectRatioIsOne) {
        width = scpx(30);
        height = scpx(30);
      } else {
        padding = `${scpx(4)} ${scpx(16)}`;
        lineHeight = lineHeightNumber;
      }

      fontSize = scpx(14);
      break;
    case LG:
      if (aspectRatioIsOne) {
        width = scpx(36);
        height = scpx(36);
      } else {
        padding = `${scpx(6)} ${scpx(18)}`;
        lineHeight = lineHeightNumber;
      }

      fontSize = scpx(16);
      break;
    case XL:
      if (aspectRatioIsOne) {
        width = scpx(44);
        height = scpx(44);
      } else {
        padding = `${scpx(8)} ${scpx(20)}`;
        lineHeight = lineHeightNumber;
      }

      fontSize = scpx(18);
      break;
    case XXL:
    default:
      if (aspectRatioIsOne) {
        width = scpx(50);
        height = scpx(50);
      } else {
        padding = `${scpx(10)} ${scpx(22)}`;
        lineHeight = lineHeightNumber;
      }

      fontSize = scpx(20);
      break;
  }

  if (aspectRatioIsOne) {
    boxSizing = CONTENT_BOX;
    overflow = HIDDEN;
    padding = '0';
    lineHeight = height;
  } else {
    boxSizing = BORDER_BOX;
  }

  return `
    box-sizing: ${boxSizing};
    ${overflow ? `overflow: ${overflow};` : STRING_EMPTY}
    ${padding ? `padding: ${padding};` : STRING_EMPTY}
    ${width ? `width: ${width};` : STRING_EMPTY}
    ${height ? `height: ${height};` : STRING_EMPTY}
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};
