import { render, screen } from '@testing-library/react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Testimonials } from './Testimonials'
import { testimonials } from '../../utils/testimonials'
import { TestimonialSlider } from './TestimonialSlider/TestimonialSlider'

describe('Testimonials Component Tests', () => {
  let component
  describe('Title Section', () => {
    const props = {
      title: 'Testimonials',
      subtitle: 'Review From Clients',
    }
    it('should render SectionTitle component', () => {
      render(<Testimonials />)
      component = render(<SectionTitle title={props.title} subtitle={props.subtitle} />)
      expect(component).toBeDefined()
    })
  })

  describe('Content section', () => {
    it('should render TestimonialSlider component', () => {
      component = render(<TestimonialSlider />)
      expect(component).toBeDefined()
    })
  })
})
