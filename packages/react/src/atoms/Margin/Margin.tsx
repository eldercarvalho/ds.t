import React from 'react'
import { Spacing, SpacingType } from '@ds.t/foundation'

export type MarginProps = {
  all?: SpacingType
  top?: SpacingType
  right?: SpacingType
  bottom?: SpacingType
  left?: SpacingType,
  children?: React.ReactNode,
}

const Margin = ({
  all,
  top,
  right,
  bottom,
  left,
  children
}: MarginProps) => {
  let className = ''

  if (all) {
    className += `dse-margin--${all}`
  }

  if (top) {
    className += `dse-margin--top-${top}`
  }

  if (right) {
    className += ` dse-margin--right-${right}`
  }

  if (bottom) {
    className += ` dse-margin--bottom-${bottom}`
  }
  
  if (left) {
    className += ` dse-margin--left-${left}`
  }

  return <div className={className}>{children}</div>
}

export default Margin