import useTestimonialSlider from '../../../hooks/useTestimonialSlider'
import { testimonials } from '../../../utils/testimonials'
import { BtnSlider } from './BtnSlider'
import { CardSlider } from './CardSlider'

export const TestimonialSlider = () => {
  const [nextSlide, prevSlide, moveDot, slideIndex] = useTestimonialSlider()
  return (
    <div className="relative flex justify-center w-full lg:w-1/2 overflow-hidden text-center max-w-screen-md h-[230px] sm:h-[200px]">
      {testimonials.map(({ id, name, review, avatar }, index) => (
        <CardSlider
          key={id}
          name={name}
          review={review}
          avatar={avatar}
          index={index}
          slideIndex={slideIndex}
        />
      ))}
      <BtnSlider moveSlide={nextSlide} direction={'prev'} />
      <BtnSlider moveSlide={prevSlide} direction={'next'} />

      <div className="absolute bottom-0 left-1/2 -translate-x-2/4 flex">
        {Array.from({ length: testimonials.length }).map((item, index) => (
          <div
            key={index}
            data-testid="slider-dot"
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? 'w-3 h-3 rounded-full border border-primary mx-[5px] bg-primary'
                : 'w-3 h-3 rounded-full border border-primary mx-[5px] bg-transparent'
            }
          ></div>
        ))}
      </div>
    </div>
  )
}
