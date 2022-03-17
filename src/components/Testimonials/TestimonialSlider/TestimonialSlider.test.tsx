import { render, screen } from '@testing-library/react'
import { TestimonialSlider } from './TestimonialSlider'
import { testimonials } from '../../../utils/testimonials'

describe('TestimonialSlider Component', () => {
  beforeEach(() => {
    render(<TestimonialSlider />)
  })
  it('should have an avatar image', () => {
    const imgElements = screen.getAllByTestId('slider-img')
    expect(imgElements.length).toBe(testimonials.length)
  })
  it('should have n testimonial cards', () => {
    const cardElements = screen.getAllByRole('article')
    expect(cardElements.length).toBe(testimonials.length)
  })
  it('should have a heading for the client name ', () => {
    const headingElements = screen.getAllByRole('heading', { level: 5 })
    expect(headingElements.length).toBe(testimonials.length)
  })
  it('should have a small to show the client review', () => {
    const element = screen.getAllByTestId('slider-review')
    expect(element.length).toBe(testimonials.length)
  })
  it('should have navigations dots', () => {
    const imgElements = screen.getAllByTestId('slider-dot')
    expect(imgElements.length).toBe(testimonials.length)
  })
})
