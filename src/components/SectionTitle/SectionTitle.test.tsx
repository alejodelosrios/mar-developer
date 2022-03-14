import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle Component', () => {
  const title = 'Prueba'
  const subtitle = 'Subtítulo de prueba'
  beforeEach(() => {
    render(<SectionTitle title={title} subtitle={subtitle} />)
  })
  it('should have H2', () => {
    const headingElement = screen.getByRole('heading', { level: 2 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement.textContent).toBe(title)
  })
  it('should have subtitle', () => {
    const spanElement = screen.getByTestId('spanSubtitleId')
    expect(spanElement).toBeInTheDocument()
    expect(spanElement.textContent).toBe(subtitle)
  })
})
