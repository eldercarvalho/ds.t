import React from 'react'
import { FontSize } from '@ds.t/foundation'

type FontSizesType = keyof typeof FontSize

type TextProps = {
  size?: FontSizesType,
  children: React.ReactNode,
}

const Text = ({ size = FontSize.base as FontSizesType, children}: TextProps) => {
  const className = `dse-text dse-text-${size}`

  return <p className={className}>{children}</p>;
}

export default Text;