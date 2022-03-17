import { render } from '@testing-library/react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Testimonials } from './Testimonials'
import { TestimonialSlider } from './TestimonialSlider/TestimonialSlider'

describe('Testimonials Component Tests', () => {
  let component
  const props = {
    title: 'Testimonials',
    subtitle: 'Review From Clients',
  }
  it('should render SectionTitle component', () => {
    render(<Testimonials />)
    component = render(<SectionTitle title={props.title} subtitle={props.subtitle} />)
    expect(component).toBeDefined()
  })

  it('should render TestimonialSlider component', () => {
    component = render(<TestimonialSlider />)
    expect(component).toBeDefined()
  })
})
