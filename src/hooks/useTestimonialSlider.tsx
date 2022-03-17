import { useState } from 'react'
import { testimonials } from '../utils/testimonials'

export default function useTestimonialSlider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== testimonials.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === testimonials.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(testimonials.length)
    }
  }

  const moveDot = (index: number) => {
    setSlideIndex(index)
  }
  return [nextSlide, prevSlide, moveDot, slideIndex] as const
}
