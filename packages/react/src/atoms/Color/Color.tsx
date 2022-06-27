import React from 'react'
import { Spacing } from '@ds.t/foundation'

type SpacingType = keyof typeof Spacing

type ColorProps = {
  hexCode: string
  width?: SpacingType
  height?: SpacingType
}

const Color = ({ hexCode, width = Spacing.sm as SpacingType, height = Spacing.sm as SpacingType }: ColorProps) => {
  const classes = `dse-width-${width} dse-height-${height}`

  return <div className={classes} style={{ backgroundColor: hexCode }}></div>
}

export default Color;