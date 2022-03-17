import { render, screen } from '@testing-library/react'
import { CardSlider } from './CardSlider'

describe('CardSlider Component', () => {
  beforeEach(() => {
    render(<CardSlider name="Manuel" review="Review test" avatar="" index={1} slideIndex={1} />)
  })
  it('should have a heading for the card title ', () => {
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it('should have a heading for the card title ', () => {
    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
  })
  it('should have a small to show the level', () => {
    const element = screen.getByText(/review test/i)
    expect(element).toBeInTheDocument()
  })
})
