import {
  BORDER_BOX, CONTENT_BOX, SOLID, STRING_EMPTY
} from '../../common/constant'

const ONE_PX = '1px'

/**
 * get border - 获取边框样式
 * @param  { Object } border
 * @param  { String } boxSizing
 * @return { String } as follows: - 如下：
 */
export const getBorder = (border, boxSizing) => {
  const defaultBorder = {
    width: ONE_PX,
    style: SOLID,
    color: STRING_EMPTY
  }
  let rule = STRING_EMPTY

  if (border) {
    border = Object.assign(defaultBorder, border)
  }

  if (boxSizing === BORDER_BOX) {
    rule = `
      position: relative;
      border: none;
      &::before {
        content: '';
        box-sizing: ${BORDER_BOX};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: ${border.width} ${border.style} ${border.color};
      }
    `
  } else {
    rule = `
      border: ${border.width} ${border.style} ${border.color};
    `
  }

  return rule
}

/**
 * get 0.5px border - 获取0.5px边框样式
 * @param  { Object } border
 * @return { String } as follows: - 如下：
 */
export const getHalfpxBorder = (border) => {
  let halfpxBorder = {
    width: ONE_PX,
    style: SOLID,
    color: STRING_EMPTY
  }

  if (border) {
    const newBorder = Object.assign({}, border)
    delete newBorder.width
    halfpxBorder = Object.assign(halfpxBorder, newBorder)
  }

  const rule = `
    position: relative;
    &::before {
      content: '';
      box-sizing: ${BORDER_BOX};
      position: absolute;
      top: 0;
      left: 0;
      border: ${halfpxBorder.width} ${halfpxBorder.style} ${halfpxBorder.color};
      width: 200%;
      height: 200%;
      transform: scale(0.5, 0.5);
      transform-origin: left top;
    }
  `

  return rule
}

/**
 * has own border - 是否含有边框
 * @param  { Boolean } hasHalfpxBorder
 * @param  { Boolean } hasBorder
 * @param  { String } boxSizing
 * @return { Boolean } as follows: - 如下：
 */
export const hasAbsolutePositionBorder = (hasHalfpxBorder, hasBorder, boxSizing) => {
  return hasHalfpxBorder || (!hasHalfpxBorder && hasBorder && (boxSizing === BORDER_BOX))
}

/**
 * has absolute position border - 是否含有自身边框
 * @param  { Boolean } hasBorder
 * @param  { String } boxSizing
 * @return { Boolean } as follows: - 如下：
 */
export const hasOwnBorder = (hasBorder, boxSizing) => {
  return hasBorder && (boxSizing === CONTENT_BOX)
}
