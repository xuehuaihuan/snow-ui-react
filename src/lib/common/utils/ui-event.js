import { isNumber } from './class'

export const getRect = (elem) => {
  return elem.getBoundingClientRect()
}

export const getTouchEvent = () => {
  const isMobile = 'ontouchstart' in document
  let event
  if (isMobile) {
    event = {
      touchstart: 'touchstart',
      touchmove: 'touchmove',
      touchend: 'touchend',
      mobile: true
    }
  } else {
    event = {
      touchstart: 'mousedown',
      touchmove: 'mousemove',
      touchend: 'mouseup',
      mobile: false
    }
  }

  return event
}

const genGetScroll = (type) => {
  const docEl = document.documentElement || document.body.parentNode

  return function () {
    return isNumber(docEl[type]) ? docEl[type] : document.body[type]
  }
}

export const getScrollTop = genGetScroll('scrollTop')

export const getScrollLeft = genGetScroll('scrollLeft')
