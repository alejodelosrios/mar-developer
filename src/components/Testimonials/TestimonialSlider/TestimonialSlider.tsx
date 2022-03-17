import { useState } from 'react'
import { testimonials } from '../../../utils/testimonials'
import BtnSlider from './BtnSlider'

export const TestimonialSlider = () => {
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
  return (
    <div className="relative flex justify-center w-full lg:w-1/2 overflow-hidden text-center max-w-screen-md h-[230px] sm:h-[200px]">
      {testimonials.map(({ id, name, review, avatar }, index) => (
        <article
          key={id}
          className={
            slideIndex === index + 1
              ? 'w-100 h-100 absolute transition-opacity ease-in-out duration-500 delay-300 flex flex-col items-center opacity-100'
              : 'w-100 h-100 absolute transition-opacity ease-in-out duration-500 delay-300 flex flex-col items-center opacity-0'
          }
        >
          <div className="flex justify-center w-full">
            <img
              className="aspect-square overflow-hidden rounded-full border border-primary border-2 w-[4rem]"
              src={avatar}
              alt={`${name}_img`}
            />
          </div>
          <h5>{name}</h5>
          <small data-testid="slider-review" className="mt-6 select-none">
            {review}
          </small>
        </article>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={'prev'} />
      <BtnSlider moveSlide={prevSlide} direction={'next'} />

      <div className="absolute bottom-0 left-1/2 -translate-x-2/4 flex">
        {Array.from({ length: testimonials.length }).map((item, index) => (
          <div
            key={index}
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
