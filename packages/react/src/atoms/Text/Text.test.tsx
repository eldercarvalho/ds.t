import React from 'react'
import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('Text', () => {
  it('should show a text', () => {
    const text = 'um texto'
    render(<Text>{text}</Text>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})