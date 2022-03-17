import { render, screen } from '@testing-library/react'
import { BtnSlider } from './BtnSlider'

describe('BtnSlider Component', () => {
  let direction = 'next'
  let mockMoveSlide = jest.fn()

  beforeEach(() => {
    render(<BtnSlider direction={direction} moveSlide={mockMoveSlide} />)
  })
  it('should have a button element', () => {
    const buttonElement = screen.getByTestId('btn-slider')
    expect(buttonElement).toBeInTheDocument()
  })
  it('should have an icon image', () => {
    const imgElement = screen.getByRole('img')
    expect(imgElement).toBeInTheDocument()
  })
  it('should call moveSlide function when user clicks the button', () => {
    const buttonElement = screen.getByTestId('btn-slider')
    buttonElement.click()
    expect(mockMoveSlide).toHaveBeenCalledTimes(1)
  })
})
