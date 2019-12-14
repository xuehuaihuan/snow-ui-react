import React from 'react'
import styled from 'styled-components'
import { Spinner } from '../../spinner'
import { isObject } from '../../common/utils'
import { getButtonText } from './icon'

export const StyledLoading = styled(Spinner)`
  &,
  & + .button-text {
    vertical-align: middle;
  }
`

/**
 * get button text - 获取按钮文本
 * @param  { Object | Boolean } loading
 * @param  { Object }   size
 * @param  { any }      children
 * @return { JSX }  as follows: - 如下：
 */
export const getLoading = (loading, size, children) => {
  return (
    <>
      <StyledLoading
        effect={(loading && loading.effect) ? loading.effect : ''}
        image={(isObject(loading) && isObject(loading.image)) ? loading.image : {}}
        size={size}
        className='button-icon for-has-icon'
      />
      {getButtonText(children)}
    </>
  )
}
