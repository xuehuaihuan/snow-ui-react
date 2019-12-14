import styled from 'styled-components'
import { getTransition } from './transition'
import { getSkin } from './skin'
import { getBorder, getHalfpxBorder, hasAbsolutePositionBorder } from './border'
import { getBlock, getInline } from './block'
import { getShape } from './shape'
import { getSize } from './size'
import { hasIcon, getForHasIcon } from './icon'
import { BUTTON_BORDER_CONTENT_CLASS } from '../constant'
import { STRING_EMPTY, RIPPLE } from '../../common/constant'

export const StyledButton = styled.button.attrs(props => ({
  type: props.type ? props.type : 'button'
}))`
  appearance: none;
  margin: 0;
  ${props => props.block ? getBlock() : getInline()}
  ${props => props.hasHalfpxBorder ? getHalfpxBorder(props.border) : STRING_EMPTY}
  ${
    props => (!props.hasHalfpxBorder && props.hasBorder)
    ? getBorder(props.border, props.boxSizing) : 'border: none;'
  }
  ${props => getSkin(props)}
  ${
    props => getShape(
      props.escapeShape, props.hasHalfpxBorder, props.hasBorder, props.boxSizing, props.borderRadiusPosition
    )
  }
  ${props => getSize(props.size, props.escapeShape, props.theme.scpx)}
  text-align: center;
  ${props => (props.escapeLoading || hasIcon(props.icon)) ? getForHasIcon(props) : STRING_EMPTY}
  ${props => props.effect === RIPPLE ? `
    & {
      position: relative;
    }
    .ripple {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  ` : ''}

  ${
    props => (props.transition && !props.escapeDisabled && !props.escapeLoading)
    ? `&,
    [fill]:not([fill='none']),
    [stroke]:not([stroke='none']),
    [stop-color] {
      ${getTransition(props.transition)}
    }` : STRING_EMPTY
  }

  ${
    props => (hasAbsolutePositionBorder(props.hasHalfpxBorder, props.hasBorder, props.boxSizing) &&
     props.transition && !props.escapeDisabled
     )
    ? `&::before {
      ${getTransition(props.transition)}
    }` : STRING_EMPTY
  }

  ${
    props => hasAbsolutePositionBorder(props.hasHalfpxBorder, props.hasBorder, props.boxSizing)
    ? `.${BUTTON_BORDER_CONTENT_CLASS} {
      position: relative;
      z-index: 1
    }` : STRING_EMPTY
  }
`
