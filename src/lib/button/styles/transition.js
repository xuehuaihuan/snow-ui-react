import { isObject } from '../../common/utils'

/**
 * get transition - 获取过渡效果样式
 * @param  { Object } propsTransition
 * @return { String } as follows: - 如下：
 */
const DEFAULT_TRANSITION = {
  property: 'all',
  duration: '300ms',
  timingFunction: 'linear',
  delay: '0ms'
}
export const getTransition = (propsTransition) => {
  let transition = Object.assign({}, DEFAULT_TRANSITION)

  transition = isObject(propsTransition) ? Object.assign(transition, propsTransition) : transition

  const rule = `
    transition: ${transition.property} ${transition.duration} ${transition.timingFunction} ${transition.delay};
  `

  return rule
}
