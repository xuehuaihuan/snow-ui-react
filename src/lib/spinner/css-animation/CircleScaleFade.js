import React from 'react'
import { StyledCircleScaleFade } from '../styles'

const CircleScaleFade = (props) => {
  return React.createElement(StyledCircleScaleFade, props, [
    React.createElement('span', { key: '1' }),
    React.createElement('span', { key: '2' }),
    React.createElement('span', { key: '3' }),
    React.createElement('span', { key: '4' }),
    React.createElement('span', { key: '5' }),
    React.createElement('span', { key: '6' }),
    React.createElement('span', { key: '7' }),
    React.createElement('span', { key: '8' })
  ])
}

export default CircleScaleFade
