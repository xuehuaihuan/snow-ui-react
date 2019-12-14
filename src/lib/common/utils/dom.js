export function addClass (elem, className) {
  const classes = className.split(/\s+/)
  for (const cName of classes) {
    elem.classList.add(cName)
  }
}

export function css (elem, style) {
  for (const s in style) {
    if (Object.prototype.hasOwnProperty.call(style, s)) {
      elem.style[s] = style[s]
    }
  }
}
