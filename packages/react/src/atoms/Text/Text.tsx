import React from 'react'
import { FontSize, FontSizeType } from '@ds.t/foundation'

export type TextProps = {
  size?: FontSizeType,
  children: React.ReactNode,
}

const Text = ({ size = FontSize.base as FontSizeType, children}: TextProps) => {
  const className = `dse-text dse-text-${size}`

  return <p className={className}>{children}</p>;
}

export default Text;