import {
  XXS,
  XS,
  SM,
  MD,
  LG,
  XL,
  XXL
} from '../../common/constant'

/**
 * get size - 获取尺寸样式
 * @param  {Object} props Component props - 组件属性
 * @return {String} as follows: - 如下：
 */
const sizes = [XXS, XS, SM, MD, LG, XL, XXL]
export const getSize = (size, scpx) => {
  size = size && sizes.includes(size) ? size : ''
  // const scpx = props.theme.scpx
  let fontSize = ''

  switch (size) {
    case XXS:
      fontSize = scpx(10)
      break
    case XS:
      fontSize = scpx(12)
      break
    case SM:
      fontSize = scpx(14)
      break
    case MD:
      fontSize = scpx(16)
      break
    case LG:
      fontSize = scpx(18)
      break
    case XL:
      fontSize = scpx(20)
      break
    case XXL:
      fontSize = scpx(22)
      break
    default:
      fontSize = ''
      break
  }

  return fontSize
}
