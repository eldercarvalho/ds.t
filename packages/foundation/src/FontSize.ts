const fontSizes =  {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
}

export type FontSizeType = keyof typeof fontSizes

export default Object.freeze(fontSizes)