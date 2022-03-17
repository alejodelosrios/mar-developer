import { SectionTitle } from '../SectionTitle/SectionTitle'
import { TestimonialSlider } from './TestimonialSlider/TestimonialSlider'

export const Testimonials = () => {
  return (
    <section className="flex flex-col items-center mx-4 mt-32 md:mx-0">
      <SectionTitle title="Testimonials" subtitle="Review From Clients" />
      <TestimonialSlider />
    </section>
  )
}
